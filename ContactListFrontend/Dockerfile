FROM node:10.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim

ENV NODE_ROOT /usr/app/

RUN mkdir -p $NODE_ROOT

WORKDIR $NODE_ROOT

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN npm rebuild node-sass --force

EXPOSE 4200
