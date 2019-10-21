# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV VUE_APP_API_URL http://localhost:8080
ENV VUE_APP_API_ENDPOINT /test

# production stage
CMD ["npm", "run", "serve"]