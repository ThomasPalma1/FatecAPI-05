from flask import request, Blueprint
from database_connection import mongo

fileRoutes = Blueprint("fileRoutes", __name__)


@fileRoutes.route('/')
def index():
    return '''
        <form method="POST" action="/create" enctype="multipart/form-data">
            <input type="file" name="report_image">
            <input type="submit">
        <form>
    '''


@fileRoutes.route('/create', methods=['POST'])
def create():
    if 'report_image' in request.files:
        report_image = request.files['report_image']
        mongo.save_file(report_image.filename, report_image)
        mongo.db.report_images.insert_one({'report_image.filename': report_image.filename})
    return 'Done!'


# the next route is for future testing only
# to know if the image was successfully uploaded to the database, just enter the image name and extension

@fileRoutes.route('/file/<filename>', methods=['GET', 'POST'])
def file(filename):
    return mongo.send_file(filename)
