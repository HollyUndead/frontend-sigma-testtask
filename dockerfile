FROM node.js:10.4.0

WORKDIR /testtre2-front

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]