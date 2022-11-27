import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import logger_format
import logging

app = Flask(__name__)

pdb = os.getenv('PDB')

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = pdb
app.config['SQLALCHEMY_ECHO'] = True
app.app_context().push()

pdb = SQLAlchemy(app)
