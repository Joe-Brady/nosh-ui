FROM nginx:1.16.1-alpine

RUN rm -rf /etc/nginx/conf.d
COPY ./nginx_server/conf /etc/nginx
COPY ./nginx_server/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html