from init_variables import app
from app.models.controllers.create_report import reportRoutes

app.register_blueprint(reportRoutes)

app.run(host='0.0.0.0', port=5001, debug=False)
