from flask import jsonify, request, flash, Blueprint
from app.models.acUser import acUser
from werkzeug.security import generate_password_hash
import logging

signUpRoute = Blueprint("signUpRoute", __name__)

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


@signUpRoute.route('/signup', methods=['POST'])
def create_event():
    user = acUser(nome=request.json['nome'])
    user.email = request.json['email']
    user.cpf = request.json['cpf']
    user.senha = request.json['senha']
    user.termos = request.json['termos']
    user.admin = request.json['admin']

    user.senha = generate_password_hash(user.senha, method='sha256')

    user_email = acUser.query.filter_by(email=user.email).first()
    print(user)

    if user_email:
        logging.getLogger().warning(msg="You are trying to create an account with an email that has already been used. Try another.")
        return jsonify(data=False, message="E-mail already registered.")

        
    import init_variables as initializer_postgresql

    initializer_postgresql.pdb.create_all()
    initializer_postgresql.pdb.session.add(user)
    initializer_postgresql.pdb.session.commit()
    initializer_postgresql.pdb.session.refresh(user)
    
    formatted_user = format_user(user)
    query_results = {'user': formatted_user}

    logging.getLogger().info(msg="Inserted data in executed query: " + str(" ") + str(query_results))


    return jsonify(data=True, message="Success in saving your registration."), format_user(user)

   

