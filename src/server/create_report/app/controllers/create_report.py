from flask import Blueprint, request
from init_variables import pdb
from app.models.Report import Report


reportRoutes = Blueprint("reportRoutes", __name__)



def format_report(report):
    return {
        "id": report.id,
        "titulo": report.titulo,
        "descricao": report.descricao,
        "anonimo": report.anonimo,
        "latitude": report.latitude,
        "longitude": report.longitude,
        "logradouro": report.logradouro,
        "cep": report.cep,
        "localidade": report.localidade,
        "uf": report.uf,
        "bairro": report.bairro,
        "descricaoLocal": report.descricaoLocal
    }


@reportRoutes.route('/')
def hello():
    return 'Hello World!'


@reportRoutes.route('/create', methods=['POST'])
def create_event():
    report = Report(titulo=request.json['titulo'])
    report.descricao = request.json['descricao']
    report.anonimo = request.json['anonimo']
    report.latitude = request.json['latitude']
    report.longitude = request.json['longitude']
    report.logradouro = request.json['logradouro']
    report.cep = request.json['cep']
    report.localidade = request.json['localidade']
    report.uf = request.json['uf']
    report.bairro = request.json['bairro']
    report.descricaoLocal = request.json['descricaoLocal']
    pdb.session.add(report)
    pdb.session.commit()
    return format_report(report)


# conseguir todos os reports
@reportRoutes.route('/reports/get', methods=['GET'])
def get_reports():
    reports = Report.query.order_by(Report.id.asc()).all()
    report_list = []
    for report in reports:
        report_list.append(format_report(report))
    return {'reports': report_list}


# conseguir apenas 1 report
@reportRoutes.route('/delete/<id>', methods=['GET'])
def get_report(id):
    report = Report.query.filter_by(id=id).one()
    formatted_report = format_report(report)
    return {'report': formatted_report}


# deletar um report
@reportRoutes.route('/reports/<id>', methods=['DELETE'])
def delete_report(id):
    report = Report.query.filter_by(id=id).one()
    pdb.session.delete(report)
    pdb.session.commit()
    return f'Report (id: {id}) deleted!'
