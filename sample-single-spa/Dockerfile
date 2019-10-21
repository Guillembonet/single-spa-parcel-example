# build stage
FROM node:10
WORKDIR /single-spa
COPY package*.json ./
RUN npm install
COPY . .

# production stage
CMD ["npm", "run", "serve"]