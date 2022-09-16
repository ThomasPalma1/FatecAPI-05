import pymongo
import gridfs
from flask_pymongo import PyMongo

# connecting to the database in mongodb
connection = pymongo.MongoClient(
    "")
db = connection.fatecapi05
grid = gridfs.GridFS(db, 'report_image')

mongo = PyMongo()
