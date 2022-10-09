from flask import request, flash, Blueprint
from src.server.auth_service.app.models.User import User
from werkzeug.security import generate_password_hash

signUpRoute = Blueprint("signUpRoute", __name__)


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


@signUpRoute.route('/signup', methods=['POST'])
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

    user.senha = generate_password_hash(user.senha, method='sha256')

    user_email = User.query.filter_by(email=user.email).first()

    if user_email:
        flash('Email já cadastrado')
    import src.server.auth_service.login_connection as initializer_postgresql

    initializer_postgresql.pdb.session.add(user)
    initializer_postgresql.pdb.session.commit()
    return format_user(user)
