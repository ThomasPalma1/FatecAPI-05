FROM python:3.8
MAINTAINER Thomas Palma
EXPOSE 8080
WORKDIR /src
COPY . .
RUN pip3 install -r ./requirements.txt
CMD ["python3", "app.py"]
