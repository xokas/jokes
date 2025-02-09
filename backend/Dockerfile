FROM node:22 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx eslint . --fix
EXPOSE 3000
CMD ["npm", "start"]