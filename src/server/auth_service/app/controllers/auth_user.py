from flask import Blueprint, request, redirect, url_for, make_response, jsonify
from flask_login import login_user, logout_user
from app.models.acUser import acUser
import logging

authRoutes = Blueprint("authRoutes", __name__)

def format_user(user):
    return {
        "id": user.id,
        "nome": user.nome,
        "email": user.email,
        "cpf": user.cpf,
        "senha": user.senha,
        "termos": user.termos,
        "admin": user.admin
    }

@authRoutes.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':

        email = request.json['email']
        senha = request.json['senha']

        user = acUser.query.filter_by(email=email).first()


        if not user or not user.verify_password(senha):
            logging.getLogger().warning(msg="Invalid email or password. Try again!")
            return make_response(jsonify(message="Unauthorized"), 401)
           
        login_user(user)
        logging.getLogger().warning(msg="User successfully authenticated!")
        return make_response(jsonify(message="Authorized"), 200)


@authRoutes.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = acUser.query.filter_by(id=id).one()
    formatted_user = format_user(user)
    return {'user': formatted_user}


@authRoutes.route('/logout')
def logout_user():
    logout_user()
    return redirect(url_for('login'))
