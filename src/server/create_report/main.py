from init_variables import app, pdb
from app.controllers.create_report import reportRoutes

app.register_blueprint(reportRoutes)

pdb.create_all()

app.run(host='0.0.0.0', port=5004, debug=False)
