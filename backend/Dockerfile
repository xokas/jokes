FROM node:22 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx eslint . --fix
EXPOSE 3000
CMD ["npm", "start"]
# En producción se podría enviar el paso intermedio de npm,
# pero es imprescindible que server.js maneje SIGINT y SIGTERM que no lo hará por defecto si es PID 1
#CMD ["node", "./src/server.js"]