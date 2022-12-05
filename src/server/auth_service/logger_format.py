import logging
from logging import Filter,FileHandler, Formatter

class FiltroSenha(Filter):
    def filter(self,record):
        if record.msg.lower().startswith('email'):
            return False
        return True

logger_format = logging.basicConfig(
    filename='logRecorder.log',
    level=logging.INFO,
    format=f'%(asctime)s | %(levelname)-8s [%(filename)s:%(lineno)d] | %(message)s')

sql_query_executed = logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

file_handler = FileHandler("logRecorder.log","w")

file_handler.addFilter(FiltroSenha())