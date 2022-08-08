FROM node:18

#Working Dir
WORKDIR /usr/src/app

#copy pakage json Files
COPY package*.json ./

#Install Prettier (For package's Build function)
RUN npm install Prettier -g

#Install Files
RUN npm install

#Copt source Files
COPY . .

#Build
RUN npm run Build

#Expose the API Port 
EXPOSE 3000

CMD ["node". "build/app.js"]