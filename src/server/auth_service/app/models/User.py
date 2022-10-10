from init_variables import pdb
from werkzeug.security import check_password_hash
from flask_login import UserMixin


class User(pdb.Model, UserMixin):
    id = pdb.Column(pdb.Integer, primary_key=True)
    nome = pdb.Column(pdb.String(50), nullable=False)
    email = pdb.Column(pdb.String(100), unique=True)
    cpf = pdb.Column(pdb.String(20), nullable=False)
    senha = pdb.Column(pdb.String(100), nullable=False)
    termos = pdb.Column(pdb.Boolean)

    def __repr__(self):
        return f"User: {self.nome}"

    def __init__(self, nome):
        self.nome = nome

    def verify_password(self, senha):
        return check_password_hash(self.senha, senha)


if __name__ == '__main__':
    pdb.create_all()
