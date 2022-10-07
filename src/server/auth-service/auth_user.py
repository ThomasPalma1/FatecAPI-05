from flask import Blueprint, request, redirect, url_for
from flask_login import login_user, logout_user
from models import User

authRoutes = Blueprint("authRoutes", __name__)


@authRoutes.route('/login', methods=['GET', 'POST'])
def login_user():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']

        user = User.query.filter_by(email=email).first()
        if not user or not user.verify_password(senha):
            return '''
                <form action="" method="post">
                    <input type="email" name="email" placeholder="Enter a valid email to connect">
                    <input type="password" name="password" placeholder="Enter a valid password">
                    <input type="submit" value="Logar">
                </form>
            '''
        login_user(user)
        return redirect(url_for('home'))


@authRoutes.route('/logout')
def logout_user():
    logout_user()
    return redirect(url_for('login'))
