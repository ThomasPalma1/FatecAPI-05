import codecs
from bson import ObjectId
from flask import request, Blueprint, make_response, jsonify
from database_connection import grid, db
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
        image_type = im.format
        output = BytesIO()
        im.save(output, format=image_type)  # image extension
        output = output.getvalue()
        _id = grid.put(output)

        db.report_images.insert_one(
            {'grid_id': ObjectId(_id), 'filename': report_image.filename, 'type': image_type})

        return build_response({"message": "Done!"}, 200)
    return build_response({"message": "Error!"}, 400)


# the next route is for future testing only
# to know if the image was successfully uploaded to the database, just enter the image name and extension

@fileRoutes.route('/file/<id>', methods=['GET'])
def file_uploaded_to_database(id):
    image = grid.get(ObjectId(id))  # getting the image in binary
    base64_data = codecs.encode(image.read(), 'base64')  # converting received image to base64
    image = base64_data.decode('utf-8')

    image_data = db.report_images.find_one({'grid_id': ObjectId(id)})

    image_base_64 = "data:image/" + image_data['type'] + ";base64," + image

    return build_response(image_base_64, 200, "text/plain")
