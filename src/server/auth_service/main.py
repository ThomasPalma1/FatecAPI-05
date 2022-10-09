from init_variables import app
from app.controllers.auth_user import authRoutes
from app.controllers.register_user import signUpRoute

app.register_blueprint(authRoutes)
app.register_blueprint(signUpRoute)

app.run(host='0.0.0.0', port=5001, debug=False)
