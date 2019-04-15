FROM node:8.14.0-alpine

RUN apk update && apk upgrade

WORKDIR /fex

RUN yarn install

ENV HOST 0.0.0.0

EXPOSE 3000

CMD yarn dev