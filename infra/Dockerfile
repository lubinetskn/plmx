FROM node:14 AS build

ARG EXTEND_ESLINT
ARG REACT_APP_API

WORKDIR /app
COPY package*.json ./

RUN npm install --registry https://art.x5.ru/api/npm/npm/ 
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]


FROM docker-registry.x5.ru/nginx

WORKDIR /app

COPY infra/nginx-service.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /app

ENTRYPOINT ["nginx", "-g", "daemon off;"]