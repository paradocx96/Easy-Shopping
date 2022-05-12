FROM node:14.17.5-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
