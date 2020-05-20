FROM node
WORKDIR /home/node/app
COPY . ./
RUN npm install
ENV PORT=
ENV MONGO_URL=
ENV MONGO_USER=
ENV MONGO_PASS=
ENV MONGO_DB=
EXPOSE $PORT
CMD [ "node", "index.js" ]
