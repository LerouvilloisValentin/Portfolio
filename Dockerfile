FROM ubuntu:20.04

RUN apt-get update && apt-get install -y git && apt-get clean

WORKDIR /app

RUN git clone https://github.com/LerouvilloisValentin/Portfolio.git

CMD ["bash"]