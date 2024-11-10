FROM node:18.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

# Set the environment variable to skip linting during build
ENV NEXT_PUBLIC_ESLINT=false

RUN npm run build

CMD ["npm", "start"]