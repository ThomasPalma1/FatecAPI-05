from init import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    cpf = db.Column(db.String(20))
    cep = db.Column(db.String(10))
    bairro = db.Column(db.String(50))
    numero = db.Column(db.Integer)
    endereco = db.Column(db.String(50))
    cidade = db.Column(db.String(10))
    senha = db.Column(db.String(10))

    def __repr__(self):
        return f"User: {self.nome}"

    def __init__(self, nome):
        self.nome = nome