from flask import Flask, request, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123456@localhost/flaskdb'
db = SQLAlchemy(app)


def format_user(user):
    return {
        "id": user.id,
        "nome": user.nome,
        "email": user.email,
        "cpf": user.cpf,
        "cep": user.cep,
        "bairro": user.bairro,
        "numero": user.numero,
        "endereco": user.endereco,
        "cidade": user.cidade,
        "senha": user.senha
    }

from models import User

@app.route('/signup', methods=['POST'])
def create_event():
    user = User(nome=request.json['nome'])
    user.email = request.json['email']
    user.cpf = request.json['cpf']
    user.cep = request.json['cep']
    user.bairro = request.json['bairro']
    user.numero = request.json['numero']
    user.endereco = request.json['endereco']
    user.cidade = request.json['cidade']
    user.senha = request.json['senha']

    user.senha=generate_password_hash(user.senha, method='sha256')

    userEmail = User.query.filter_by(email=user.email).first()

    if userEmail:
        flash('Email já cadastrado')


    db.session.add(user)
    db.session.commit()
    return format_user(user)
    


    