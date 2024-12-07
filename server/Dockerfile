FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --no-optional

COPY . .

EXPOSE 3000

CMD ["npx","nodemon", "server.js"]