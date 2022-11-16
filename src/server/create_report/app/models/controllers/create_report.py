from flask import Blueprint, Flask, request
from flask_sqlalchemy import SQLAlchemy
from init_variables import pdb, app
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
        "Localidade": report.Localidade,
        "UF": report.UF,
        "Bairro": report.Bairro,
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
    report.Localidade = request.json['Localidade']
    report.UF = request.json['UF']
    report.Bairro = request.json['Bairro']
    report.descricaoLocal = "teste"
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


if __name__ == '__main__':
    pdb.create_all()
