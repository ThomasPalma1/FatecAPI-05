from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:thomaspalma1@localhost/flaskdb'
db = SQLAlchemy(app)


class Report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100))
    descricao = db.Column(db.String(255))
    anonimo = db.Column(db.Boolean)
    latitude = db.Column(db.String)
    longitude = db.Column(db.String)
    logradouro = db.Column(db.String)
    cep = db.Column(db.String)
    Localidade = db.Column(db.String)
    UF = db.Column(db.String)
    Bairro = db.Column(db.String)
    descricaoLocal = db.Column(db.String)

    def __repr__(self):
        return f"Report: {self.titulo}"

    def __init__(self, titulo):
        self.titulo = titulo


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


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/create', methods=['POST'])
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
    db.session.add(report)
    db.session.commit()
    return format_report(report)


# conseguir todos os reports
@app.route('/reports/get', methods=['GET'])
def get_reports():
    reports = Report.query.order_by(Report.id.asc()).all()
    report_list = []
    for report in reports:
        report_list.append(format_report(report))
    return {'reports': report_list}


# conseguir apenas 1 report
@app.route('/delete/<id>', methods=['GET'])
def get_report(id):
    report = Report.query.filter_by(id=id).one()
    formatted_report = format_report(report)
    return {'report': formatted_report}


# deletar um report
@app.route('/reports/<id>', methods=['DELETE'])
def delete_report(id):
    report = Report.query.filter_by(id=id).one()
    db.session.delete(report)
    db.session.commit()
    return f'Report (id: {id}) deleted!'


if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=False)
