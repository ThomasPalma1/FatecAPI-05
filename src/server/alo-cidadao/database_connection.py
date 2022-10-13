import pymongo
import gridfs
import os

from flask_pymongo import PyMongo

# connecting to the database in mongodb
mdb = os.getenv('MDB')
connection = pymongo.MongoClient(mdb)
db = connection.fatecapi05
grid = gridfs.GridFS(db, 'report_image')

mongo = PyMongo()
