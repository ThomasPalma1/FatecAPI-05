import codecs
from bson import ObjectId
from flask import request, Blueprint, make_response, jsonify
from database_connection import grid, mongo
from PIL import Image  # library to open the received image
from io import BytesIO  # and get image bytes to send to mongodb
from response_builder import build_response

fileRoutes = Blueprint("fileRoutes", __name__)


@fileRoutes.route('/')  # simple form to simulate image upload
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

        im = Image.open(report_image)
        output = BytesIO()
        im.save(output, format=im.format)  # image extension
        output = output.getvalue()
        _id = grid.put(output)

        mongo.db.report_images.insert_one({'grid_id': ObjectId(_id), 'filename': report_image.filename})

        return build_response("Done!", 200)
    return build_response("Error!", 400)


# the next route is for future testing only
# to know if the image was successfully uploaded to the database, just enter the image name and extension

@fileRoutes.route('/file/<id>', methods=['GET'])
def file_uploaded_to_database(id):
    image = grid.get(ObjectId(id))  # getting the image in binary
    base64_data = codecs.encode(image.read(), 'base64')  # converting received image to base64
    image = base64_data.decode('utf-8')
    return build_response(image, 200)
