from init_variables import pdb
from werkzeug.security import check_password_hash
from flask_login import UserMixin



class userTermos(pdb.Model):
    id = pdb.Column(pdb.Integer, primary_key=True)
    objeto = pdb.Column(pdb.Boolean)
    aceitacao = pdb.Column(pdb.Boolean)
    acessoUser = pdb.Column(pdb.Boolean)
    cadastro = pdb.Column(pdb.Boolean)
    servico = pdb.Column(pdb.Boolean)
    preco = pdb.Column(pdb.Boolean)
    cancelamento = pdb.Column(pdb.Boolean)
    suporte = pdb.Column(pdb.Boolean)
    responsabilidade = pdb.Column(pdb.Boolean)
    direitorAutorais = pdb.Column(pdb.Boolean)
    sancoes = pdb.Column(pdb.Boolean)
    rescisao = pdb.Column(pdb.Boolean)
    alteracoes = pdb.Column(pdb.Boolean)
    politicaPrivacidade = pdb.Column(pdb.Boolean)
    foro = pdb.Column(pdb.Boolean)
    user_id = pdb.Column(pdb.Integer, pdb.ForeignKey('ac_user.id'))
    termos_id = pdb.Column(pdb.Integer, pdb.ForeignKey('termos.id'))

    def __repr__(self):
        return f"userTermos: {self.objeto}"

    def __init__(self, objeto):
        self.objeto = objeto


class acUser(pdb.Model, UserMixin):
    id = pdb.Column(pdb.Integer, primary_key=True)
    nome = pdb.Column(pdb.String(50), nullable=False)
    email = pdb.Column(pdb.String(100), unique=True)
    cpf = pdb.Column(pdb.String(20), nullable=False)
    senha = pdb.Column(pdb.String(100), nullable=False)
    termos = pdb.Column(pdb.Boolean)
    admin = pdb.Column(pdb.Boolean)

    def __repr__(self):
        return f"User: {self.nome}"

    def __init__(self, nome):
        self.nome = nome

    def verify_password(self, senha):
        return check_password_hash(self.senha, senha)

class Termos(pdb.Model):
    id = pdb.Column(pdb.Integer, primary_key=True)
    objeto = pdb.Column(pdb.String)
    aceitacao = pdb.Column(pdb.String)
    acessoUser = pdb.Column(pdb.String)
    cadastro = pdb.Column(pdb.String)
    servico = pdb.Column(pdb.String)
    preco = pdb.Column(pdb.String)
    cancelamento = pdb.Column(pdb.String)
    suporte = pdb.Column(pdb.String)
    responsabilidade = pdb.Column(pdb.String)
    direitorAutorais = pdb.Column(pdb.String)
    sancoes = pdb.Column(pdb.String)
    rescisao = pdb.Column(pdb.String)
    alteracoes = pdb.Column(pdb.String)
    politicaPrivacidade = pdb.Column(pdb.String)
    foro = pdb.Column(pdb.String)
    createdAt = pdb.Column(pdb.DateTime(6), default=pdb.func.current_timestamp(), nullable=False)

    def __repr__(self):
        return f"Termos: {self.objeto}"

    def __init__(self, objeto):
        self.objeto = objeto


if __name__ == '__main__':
    pdb.create_all()
