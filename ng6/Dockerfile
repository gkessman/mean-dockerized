FROM node:10.15

LABEL maintainer.name="Greg Kessman"
LABEL maintainer.email="greg.kessman@gmail.com"

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install -s

COPY . /usr/src/app

EXPOSE 4200

CMD ["npm", "start"]