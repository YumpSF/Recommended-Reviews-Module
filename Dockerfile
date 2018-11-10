FROM node:11
RUN mkdir -p src/app
WORKDIR /src/app
COPY package*.json /src/app/
RUN npm install
COPY . /src/app/

RUN chmod +x ./wait-for-it.sh

EXPOSE 3000


#CMD ["npm", "start"]

CMD ["./wait-for-it.sh", "database:3306", "--", "node", "./server/index.js"]
