import os
from flask import Flask
from flask_cors import CORS
from upload_images import fileRoutes
from logger_format import logger_format


def start_application():
    mdb = os.getenv('MDB')
    app = Flask(__name__)
    app.config["MONGO_URI"] = mdb
    app.register_blueprint(fileRoutes)

    CORS(app)
    from database_connection import mongo
    mongo.init_app(app)

    app.run(host="0.0.0.0", port=5000, debug=False)


def main():
    start_application()


if __name__ == "__main__":
    main()
