FROM node:lts-alpine3.17

WORKDIR /app

COPY . .

RUN apk add --no-cache git openssh

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]