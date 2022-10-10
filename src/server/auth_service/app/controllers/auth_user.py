from flask import Blueprint, request, redirect, url_for, make_response, jsonify
from flask_login import login_user, logout_user
from app.models.User import User

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':

        email = request.json['email']
        senha = request.json['senha']

        user = User.query.filter_by(email=email).first()


        if not user or not user.verify_password(senha):
            return make_response(jsonify(data=False, message="Email ou Senha inválidos, tente novamente!"), 401)
           
        login_user(user)
        return make_response(jsonify(data=True), 200)


@authRoutes.route('/logout')
def logout_user():
    logout_user()
    return redirect(url_for('login'))
