FROM python:3.8
LABEL maintainer="Thomas Palma"
EXPOSE 5001
WORKDIR /src
COPY . .
RUN pip3 install -r ./requirements.txt
CMD ["python3", "main.py"]