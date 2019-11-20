# production stage
FROM nginx:stable-alpine as production-stage
COPY index.html /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]