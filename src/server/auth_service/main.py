from init_variables import app, pdb
from app.controllers.auth_user import authRoutes
from app.controllers.register_user import signUpRoute
from logger_format import logger_format

app.register_blueprint(authRoutes)
app.register_blueprint(signUpRoute)

pdb.create_all()
app.run(host='0.0.0.0', port=5001, debug=False)
