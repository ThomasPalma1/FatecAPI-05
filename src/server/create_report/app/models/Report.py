from init_variables import pdb


class Report(pdb.Model):
    id = pdb.Column(pdb.Integer, primary_key=True)
    titulo = pdb.Column(pdb.String(100))
    descricao = pdb.Column(pdb.String(255))
    anonimo = pdb.Column(pdb.Boolean)
    latitude = pdb.Column(pdb.String)
    longitude = pdb.Column(pdb.String)
    logradouro = pdb.Column(pdb.String)
    cep = pdb.Column(pdb.String)
    localidade = pdb.Column(pdb.String)
    uf = pdb.Column(pdb.String)
    bairro = pdb.Column(pdb.String)
    descricaoLocal = pdb.Column(pdb.String)
    statusObras = pdb.Column(pdb.String)

    def __repr__(self):
        return f"Report: {self.titulo}"

    def __init__(self, titulo):
        self.titulo = titulo
