FROM node:lts-bullseye

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -f

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]