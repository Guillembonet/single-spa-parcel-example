# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app2
ENV PATH /app2/node_modules/.bin:$PATH
COPY package.json /app2/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app2
RUN npm run build:portal

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /app2/release /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]