from src.server.auth_service.login_connection import login_manager
from src.server.auth_service.app.models.User import User


@login_manager.user_loader
def get_user(user_id):
    return User.query.filter_id(id=user_id).first()
