# estágio de build
FROM node:22.14-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# estágio de produção
FROM node:22.14-alpine AS production-stage

WORKDIR /app
COPY package.json next.config.ts ./
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node_modules/.bin/next", "start", "-p", "3000"]