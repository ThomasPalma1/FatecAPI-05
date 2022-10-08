from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os


def initialize_database(app):
    db = SQLAlchemy(app)
    db.create_all()


def main():
    app = Flask(__name__)
    pdb = os.getenv('PDB')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = pdb

    initialize_database(app)

    from auth_user import authRoutes
    from register_user import signUpRoute

    app.register_blueprint(authRoutes)
    app.register_blueprint(signUpRoute)

    app.run(host='0.0.0.0', port=5000, debug=False)


if __name__ == "__main__":
    main()
