import codecs
from ctypes.wintypes import tagRECT
from fileinput import filename
from urllib import response
from bson import ObjectId
import os
from flask_cors import CORS, cross_origin
from flask import request, Blueprint, make_response, jsonify, session
from database_connection import grid, db
from PIL import Image  # library to open the received image
from io import BytesIO  # and get image bytes to send to mongodb
from response_builder import build_response
import logging

fileRoutes = Blueprint("fileRoutes", __name__)

UPLOAD_FOLDER = '../../client/AloCidadao/src/path/uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])


# fileRoutes.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
@fileRoutes.route('/')  # simple form to simulate image upload
def index():
    return '''
        <form method="POST" action="/create" enctype="multipart/form-data">
            <input type="file" name="report_image">
            <input type="submit">
        <form>
    '''


@fileRoutes.route('/upload', methods=['POST'])
def fileUpload():
    target = os.path.join(UPLOAD_FOLDER, 'report_image')
    if not os.path.isdir(target):
        os.mkdir(target)
    print(request.files)
    file = request.files['file']
    fileName = file.filename
    destination = "/".join([target, fileName])
    file.save(destination)
    session['uploadFilePath'] = destination
    response = "Caiu aqui? Upou?"
    return request.files


@fileRoutes.route('/create', methods=['POST'])
def create():
    print(request.files)
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
