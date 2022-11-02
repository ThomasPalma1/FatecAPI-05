FROM python:3.8
EXPOSE 8080
WORKDIR /src
COPY /src .
RUN pip3 install -r ./requirements.txt
CMD ["python3", "main.py"]