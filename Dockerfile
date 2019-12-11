FROM node:10-alpine
LABEL mantainer=i@muchen.me \
    version=0.0.3

COPY . /opt/www

WORKDIR /opt/www
RUN npm install --production

CMD ["npm", "start"]
EXPOSE 7001

