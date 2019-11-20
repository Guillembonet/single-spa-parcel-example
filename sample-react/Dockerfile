# build environment
FROM node:12.2.0-alpine as build
WORKDIR /react
ENV PATH /react/node_modules/.bin:$PATH
COPY package.json /react/package.json
RUN npm install --silent
COPY . /react

RUN rm -v /react/.env
COPY .env.docker /react/.env
ENV REACT_APP_API_URL http://localhost:8081
ENV REACT_APP_API_ENDPOINT /test
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /react/release /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]