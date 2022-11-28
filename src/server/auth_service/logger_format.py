import logging

logger_format = logging.basicConfig(
    filename='logRecorder.log',
    level=logging.INFO,
    format=f'%(asctime)s | %(levelname)s | %(message)s')

sql_query_executed = logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)