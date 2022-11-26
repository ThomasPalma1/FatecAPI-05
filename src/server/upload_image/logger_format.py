import logging

logger_format = logging.basicConfig(
    filename='logRecorder.log',
    level=logging.INFO,
    format=f'%(asctime)s | %(levelname)s | %(message)s')
