FROM node:lts-alpine

COPY package.json .
COPY .next .next
COPY assets assets
COPY next.config.js .
RUN yarn --production --ignore-scripts --prefer-offline

EXPOSE 3000

CMD [ "yarn", "start" ]