import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)

pdb = os.getenv('PDB')

app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = pdb
app.app_context().push()

pdb = SQLAlchemy(app)
