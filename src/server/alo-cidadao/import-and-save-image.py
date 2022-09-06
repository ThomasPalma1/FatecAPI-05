from flask import Flask, request, url_for
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'url-mongo-db-server'
mongo = PyMongo(app)


@app.route('/')
def index():
    return '''
        <form method="POST" action "/create" enctype="multipart/form-data">
            <input type="file" name="report_image">
            <input type="submit">
        <form>
    '''


@app.route('/create', methods=['POST'])
def create():
    if 'report_image' in request.files:
        report_image = request.files['report_image']
        mongo.save_file(report_image.filename, report_image)
        mongo.db.users.insert({'report_image.filename': report_image.filename})
    return 'Done!'


# the next route is for future testing only
# to know if the image was successfully uploaded to the database, just enter the image name and extension

@app.route('/file/<filename>')
def file(filename):
    return mongo.send_file(filename)
