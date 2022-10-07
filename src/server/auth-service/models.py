from flask_login import UserMixin
from login_connection import login_manager, db


@login_manager.user_loader
def get_user(user_id):
    return User.query.filter_id(id=user_id).first()


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    cpf = db.Column(db.String(20))
    cep = db.Column(db.String(10))
    bairro = db.Column(db.String(50))
    numero = db.Column(db.String)
    endereco = db.Column(db.String(50))
    cidade = db.Column(db.String(10))
    senha = db.Column(db.String(100))

    def __repr__(self):
        return f"User: {self.nome}"

    def __init__(self, nome):
        self.nome = nome
