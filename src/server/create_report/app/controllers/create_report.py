from flask import Blueprint, request
from init_variables import pdb
from app.models.Report import Report
import logger_format
import logging

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
    pdb.session.refresh(report)

    formatted_report = format_report(report)
    query_results = {'report': formatted_report}

    logging.getLogger().info(msg="Inserted data in executed query: " + str(" ") + str(query_results))

    return formatted_report

@reportRoutes.route('/reports/get', methods=['GET'])
def get_reports():
    reports = Report.query.order_by(Report.id.asc()).all()
    report_list = []
    for report in reports:
        report_list.append(format_report(report))
    return {'reports': report_list}


@reportRoutes.route('/reports/<id>', methods=['GET'])
def get_report(id):
    report = Report.query.filter_by(id=id).one()
    formatted_report = format_report(report)
    query_results = {'report': formatted_report}
    logging.getLogger().info(msg="Result of the executed query: " + str(" ") + str(query_results))
    return query_results



@reportRoutes.route('/delete/<id>', methods=['DELETE'])
def delete_report(id):
    report = Report.query.filter_by(id=id).one()
    formatted_report = format_report(report)
    query_results = {'report': formatted_report}
    pdb.session.delete(report)
    pdb.session.commit()
    logging.getLogger().info(msg="Deleted data: " + str(" ") + str(query_results))
    return f'Report (id: {id}) deleted!'
