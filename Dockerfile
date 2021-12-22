FROM node:lts-alpine

COPY package.json .
COPY .next .next
COPY public public
COPY next.config.js .
RUN yarn --production --ignore-scripts --prefer-offline

EXPOSE 3000

CMD [ "yarn", "start" ]