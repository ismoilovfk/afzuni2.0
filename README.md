# React Hello World

Простое приложение "Hello World" на React.

## Запуск с использованием npm

### Установка
```bash
npm install
```

### Запуск приложения
```bash
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Запуск с использованием Docker

### Вариант 1: Сборка и запуск через Docker Compose
```bash
docker-compose up
```

### Вариант 2: Сборка и запуск через Docker напрямую
```bash
# Сборка образа
docker build -t react-hello-world .

# Запуск контейнера
docker run -p 3000:80 react-hello-world
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Деплой на GitHub Pages

### Ручной деплой
1. Обновите поле `homepage` в package.json на ваш GitHub Pages URL:
```json
"homepage": "https://<USERNAME>.github.io/<REPO_NAME>"
```

2. Установите зависимости и выполните деплой:
```bash
npm install
npm run deploy
```

### Автоматический деплой через GitHub Actions
После пуша в ветку main/master, GitHub Actions автоматически соберет и задеплоит приложение на GitHub Pages.

Для настройки:
1. Убедитесь, что репозиторий публичный или у вас есть GitHub Pro
2. В настройках репозитория (Settings > Pages) выберите источник: ветка gh-pages
3. После успешного выполнения workflow, ваше приложение будет доступно по адресу https://<USERNAME>.github.io/<REPO_NAME> 