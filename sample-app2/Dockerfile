# base image
FROM node:lts-alpine as build-stage

# set working directory
WORKDIR /app2

COPY package*.json ./
RUN npm install --silent
COPY . .

# start app
CMD ["npm", "run", "watch:portal"]