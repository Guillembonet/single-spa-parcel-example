# build environment
FROM node:12.2.0-alpine as build
WORKDIR /parcel
ENV PATH /parcel/node_modules/.bin:$PATH
COPY package.json /parcel/package.json
RUN npm install --silent
COPY . /parcel
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY --from=build /parcel/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]