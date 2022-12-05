from flask import Blueprint, request, make_response, jsonify
from init_variables import pdb
from app.models.acUser import Termos
from app.models.acUser import userTermos
import logging

termosRoutes = Blueprint("termosRoutes", __name__)


def format_termo(termo):
    return {
        "id": termo.id,
        "objeto": termo.objeto,
        "aceitacao": termo.aceitacao,
        "acessoUser": termo.acessoUser,
        "cadastro": termo.cadastro,
        "servico": termo.servico,
        "preco": termo.preco,
        "cancelamento": termo.cancelamento,
        "suporte": termo.suporte,
        "responsabilidade": termo.responsabilidade,
        "direitorAutorais": termo.direitorAutorais,
        "sancoes": termo.sancoes,
        "rescisao": termo.rescisao,
        "alteracoes": termo.alteracoes,
        "politicaPrivacidade": termo.politicaPrivacidade,
        "foro": termo.foro,
        "createdAt": termo.createdAt
      
    }


def format_termoUser(userTermo):
    return{
        "id": userTermo.id,
        "objeto": userTermo.objeto,
        "aceitacao": userTermo.aceitacao,
        "acessoUser": userTermo.acessoUser,
        "cadastro": userTermo.cadastro,
        "servico": userTermo.servico,
        "preco": userTermo.preco,
        "cancelamento": userTermo.cancelamento,
        "suporte": userTermo.suporte,
        "responsabilidade": userTermo.responsabilidade,
        "direitorAutorais": userTermo.direitorAutorais,
        "sancoes": userTermo.sancoes,
        "rescisao": userTermo.rescisao,
        "alteracoes": userTermo.alteracoes,
        "politicaPrivacidade": userTermo.politicaPrivacidade,
        "foro": userTermo.foro,
        "user_id": userTermo.user_id,
        "termos_id": userTermo.termos_id
    }


@termosRoutes.route('/')
def hello():
    return 'Hello World!'



@termosRoutes.route('/createTermos', methods=['POST'])
def create_event():
    termo = Termos(objeto=request.json['objeto'])
    termo.aceitacao = request.json['aceitacao']
    termo.acessoUser = request.json['acessoUser']
    termo.cadastro = request.json['cadastro']
    termo.servico = request.json['servico']
    termo.preco = request.json['preco']
    termo.cancelamento = request.json['cancelamento']
    termo.suporte = request.json['suporte']
    termo.responsabilidade = request.json['responsabilidade']
    termo.direitorAutorais = request.json['direitorAutorais']
    termo.sancoes = request.json['sancoes']
    termo.rescisao = request.json['rescisao']
    termo.alteracoes = request.json['alteracoes']
    termo.politicaPrivacidade = request.json['politicaPrivacidade']
    termo.foro = request.json['foro']

    pdb.session.add(termo)
    pdb.session.commit()
    pdb.session.refresh(termo)

    formatted_termo = format_termo(termo)
    query_results = {'termo': formatted_termo}

    logging.getLogger().info(msg="Inserted data in executed query: " + str(" ") + str(query_results))

    return formatted_termo





@termosRoutes.route('/termos/get', methods=['GET'])
def get_termos():
    termos = Termos.query.order_by(Termos.id.asc()).all()
    
    termos_list = []
    termos_list.append(format_termo(termos[-1]))
    return {'termos': termos_list}


@termosRoutes.route('/termosGeral/get', methods=['GET'])
def get_reports():
    termos = Termos.query.order_by(Termos.id.asc()).all()
    termo_list = []
    for report in termos:
        termo_list.append(format_termo(report))
    return {'termos': termo_list}

@termosRoutes.route('/userTermos/<user_id>', methods=['GET'])
def get_userTermos(user_id):
    UserTermos = userTermos.query.order_by(userTermos.id.asc()).filter_by(user_id=user_id).all()
    
    termos_list = []
    termos_list.append(format_termoUser(UserTermos[-1]))
    return {'userTermos': termos_list}

@termosRoutes.route('/termosUser', methods=['POST'])
def create_TermosUser():
    userTermo = userTermos(objeto=request.json['objeto'])
    userTermo.aceitacao = request.json['aceitacao']
    userTermo.acessoUser = request.json['acessoUser']
    userTermo.cadastro = request.json['cadastro']
    userTermo.servico = request.json['servico']
    userTermo.preco = request.json['preco']
    userTermo.cancelamento = request.json['cancelamento']
    userTermo.suporte = request.json['suporte']
    userTermo.responsabilidade = request.json['responsabilidade']
    userTermo.direitorAutorais = request.json['direitorAutorais']
    userTermo.sancoes = request.json['sancoes']
    userTermo.rescisao = request.json['rescisao']
    userTermo.alteracoes = request.json['alteracoes']
    userTermo.politicaPrivacidade = request.json['politicaPrivacidade']
    userTermo.foro = request.json['foro']
    userTermo.user_id = request.json['user_id']
    userTermo.termos_id = request.json['termos_id']

    pdb.session.add(userTermo)
    pdb.session.commit()
    pdb.session.refresh(userTermo)

    formatted_UserTermo = format_termoUser(userTermo)
    query_results = {'userTermo': formatted_UserTermo}

    logging.getLogger().info(msg="Inserted data in executed query: " + str(" ") + str(query_results))

    return formatted_UserTermo

@termosRoutes.route('/termos/<id>', methods=['GET'])
def get_TermoId(id):
    termos = Termos.query.filter_by(id=id).one()
    format_termos = format_termo(termos)
    query_results = {'termo': format_termos}
    logging.getLogger().info(msg="Result of the executed query: " + str(" ") + str(query_results))
    return query_results

# @reportRoutes.route('/reports/<id>', methods=['GET'])
# def get_report(id):
#     report = Report.query.filter_by(id=id).one()
#     formatted_report = format_report(report)
#     return {'report': formatted_report}
