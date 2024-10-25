FROM node:18.17.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

CMD ["npm", "start"]