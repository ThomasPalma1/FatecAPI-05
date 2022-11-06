from src.server.auth_service.init_variables import login_manager
from src.server.auth_service.app.models.acUser import acUser


@login_manager.user_loader
def get_user(user_id):
    return acUser.query.filter_id(id=user_id).first()
