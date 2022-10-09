from src.server.auth_service.login_connection import app
from src.server.auth_service.app.controllers.auth_user import authRoutes
from src.server.auth_service.app.controllers.register_user import signUpRoute

app.register_blueprint(authRoutes)
app.register_blueprint(signUpRoute)

app.run(host='0.0.0.0', port=5000, debug=False)
