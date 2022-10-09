from src.server.auth_service.login_connection import pdb
from werkzeug.security import check_password_hash
from flask_login import UserMixin


class User(pdb.Model, UserMixin):
    id = pdb.Column(pdb.Integer, primary_key=True)
    nome = pdb.Column(pdb.String(50), nullable=False)
    email = pdb.Column(pdb.String(100), unique=True)
    cpf = pdb.Column(pdb.String(20), nullable=False)
    cep = pdb.Column(pdb.String(10), nullable=False)
    bairro = pdb.Column(pdb.String(50), nullable=False)
    numero = pdb.Column(pdb.String(100), nullable=False)
    endereco = pdb.Column(pdb.String(50), nullable=False)
    cidade = pdb.Column(pdb.String(10), nullable=False)
    senha = pdb.Column(pdb.String(100), nullable=False)

    def __repr__(self):
        return f"User: {self.nome}"

    def __init__(self, nome):
        self.nome = nome

    def verify_password(self, senha):
        return check_password_hash(self.senha, senha)


if __name__ == '__main__':
    pdb.create_all()
