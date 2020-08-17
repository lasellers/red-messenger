# sudo docker build . - f Dockerfile -t app:1
# sudo docker run -i -t --name red_app -p 3001:3001 app:1
FROM node:latest

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
# COPY backend/ ./
COPY --chown=node:node backend/. ./
USER node
RUN npm install
EXPOSE 3001

CMD [ "node", "app.js" ]
