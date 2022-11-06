FROM python:3.8
LABEL maintainer="Thomas Palma"
EXPOSE 5000
WORKDIR /src
COPY . .
RUN pip3 install -r ./requirements.txt
CMD ["python3", "app.py"]
