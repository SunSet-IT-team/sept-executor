# Этап сборки
FROM node:20-alpine as build

# Устанавливаем git и другие необходимые зависимости
RUN apk add --no-cache git

WORKDIR /app
COPY package.json yarn.lock ./

# Устанавливаем зависимости через Yarn
RUN yarn install --frozen-lockfile

# Копируем исходный код и собираем приложение
COPY . .
RUN yarn build

# Этап запуска
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]