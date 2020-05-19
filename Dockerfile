FROM node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 8000
EXPOSE 9111
CMD [ "node", "index.js" ]
