import os
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
import logger_format
import logging


from flask import Flask


app = Flask(__name__)

login_manager = LoginManager(app)

pdb = os.getenv('PDB')

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = pdb
app.config["SQLALCHEMY_ECHO"] = True
app.app_context().push()

pdb = SQLAlchemy(app)
pdb.create_all()
