FROM node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . ./
USER node
RUN npm install
ENV PORT=
ENV MONGO_URL=
ENV MONGO_USER=
ENV MONGO_PASS=
ENV MONGO_DB=
COPY --chown=node:node . .
EXPOSE 8000
CMD [ "node", "index.js" ]
