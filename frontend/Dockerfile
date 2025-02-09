FROM node:22 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run lint
RUN npm run build
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]