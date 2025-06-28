## Build Stage ##
FROM node:24.3.0-alpine3.22 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

## Production Stage ##
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



