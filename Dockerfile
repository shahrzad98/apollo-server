FROM node:16-alpine3.14
ENV NODE_VERSION 16.13.0

WORKDIR /app
ENV NODE_ENV production
ENV PORT 5000

COPY package.json /app

RUN npm install

COPY . /app
EXPOSE 5000
CMD ["npm", "run", "prod"]
