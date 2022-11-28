from flask import Blueprint, request
from init_variables import pdb
from app.models.acUser import Termos

termosRoutes = Blueprint("termosRoutes", __name__)


def format_termo(termo):
    return {
        "id": termo.id,
        "objeto": termo.titulo,
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
    return format_termo(termo)


# @reportRoutes.route('/reports/get', methods=['GET'])
# def get_reports():
#     reports = Report.query.order_by(Report.id.asc()).all()
#     report_list = []
#     for report in reports:
#         report_list.append(format_report(report))
#     return {'reports': report_list}


# @reportRoutes.route('/reports/<id>', methods=['GET'])
# def get_report(id):
#     report = Report.query.filter_by(id=id).one()
#     formatted_report = format_report(report)
#     return {'report': formatted_report}
