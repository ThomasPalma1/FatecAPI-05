import pymongo
import gridfs
from flask_pymongo import PyMongo

# connecting to the database in mongodb
connection = pymongo.MongoClient(
    "mongodb+srv://fatecapi_05:qwerty-alocidadao@fatecapi05.yfonl4u.mongodb.net/fatecapi05?retryWrites=true&w=majority")
db = connection.fatecapi05
grid = gridfs.GridFS(db, 'report_image')

mongo = PyMongo()
