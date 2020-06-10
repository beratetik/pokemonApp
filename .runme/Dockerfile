FROM node:13.13.0
WORKDIR /app
COPY . .
RUN npm run build:prod
ENTRYPOINT npm run start
