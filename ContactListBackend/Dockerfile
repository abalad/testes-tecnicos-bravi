FROM node:10.9.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g nodemon --quiet

EXPOSE 3030

CMD ["npm", "start"]
