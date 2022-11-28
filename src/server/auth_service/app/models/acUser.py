from init_variables import pdb
from werkzeug.security import check_password_hash
from flask_login import UserMixin



userTermos = pdb.Table('user_termos',
    pdb.Column('id', pdb.Integer, primary_key=True),
    pdb.Column('objeto',pdb.Boolean),
    pdb.Column('aceitacao',pdb.Boolean),
    pdb.Column('acessoUser',pdb.Boolean),
    pdb.Column('cadastro',pdb.Boolean),
    pdb.Column('servico',pdb.Boolean),
    pdb.Column('preco',pdb.Boolean),
    pdb.Column('cancelamento', pdb.Boolean),
    pdb.Column('suporte', pdb.Boolean),
    pdb.Column('responsabilidade', pdb.Boolean),
    pdb.Column('direitorAutorais', pdb.Boolean),
    pdb.Column('sancoes', pdb.Boolean),
    pdb.Column('rescisao', pdb.Boolean),
    pdb.Column('alteracoes', pdb.Boolean),
    pdb.Column('politicaPrivacidade', pdb.Boolean),
    pdb.Column('foro', pdb.Boolean),
     pdb.Column('user_id', pdb.Integer, pdb.ForeignKey('ac_user.id')),
    pdb.Column('termos_id', pdb.Integer, pdb.ForeignKey('termos.id'))
)

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
        return f"Termos: {self.titulo}"

    def __init__(self, titulo):
        self.titulo = titulo


if __name__ == '__main__':
    pdb.create_all()
