# build environment
FROM node:12.2.0-alpine as build
WORKDIR /vue-parcel
ENV PATH /vue-parcel/node_modules/.bin:$PATH
COPY package.json /vue-parcel/package.json
RUN npm install --silent
COPY . /vue-parcel
ENV VUE_APP_API_URL http://localhost:8080
ENV VUE_APP_API_ENDPOINT /test
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /vue-parcel/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]