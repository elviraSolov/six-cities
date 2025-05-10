# Шесть городов

## Описание проекта

Шесть городов - сервис для путешественников, не желающих переплачивать за аренду жилья. Выбирайте один из шести популярных городов для путешествий и получайте актуальный список предложений по аренде. Подробная информация о жилье, показ объекта на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное предложение.

## Описание страниц  

- **Главная страница** - содержит в себе список городов с предложениями по аренде. Имеет возможность сортировки предложений, просмотра их местоположения на карте и добавления в избранное.
- **Страница предложения** - страница с расширенной информацией по выбранному отелю. Помимо информации о предложении содержит в себе форму для отправки отзыва (доступна только авторизованным пользователям) и карту с предложениями поблизости. Так же, как и главная страница, имеет возможность добавления предложения в избранное. 
- **Страница авторизации** - сейчас у сервера отсутствует возможность регистрации, авторизоваться можно под логином Oliver.conner@gmail.com и паролем 12345678. Авторизация на сервере происходит на основании токена, он передается в каждом запросе в заголовке `X-Token`.
- **Страница избранного** - содержит в себе список сохраненных предложений по всем шести городам (доступна только авторизованным пользователям).
- **Страница 404** - страница-заглушка, которая открывается в случае неудачного запроса со стороны клиента.

## Взаимодействие с сервером 

Спецификация по взаимодействию с сервером в формате OpenAPI — https://10.react.htmlacademy.pro/six-cities/spec.

## Используемые технологии 
<img height="50" title="HTML5" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png">&nbsp;&nbsp;&nbsp;
<img height="50" title="CSS" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png">&nbsp;&nbsp;&nbsp;
<img height="50" title="Sass" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sass.png">&nbsp;&nbsp;&nbsp;
<img height="50" title="TypeScript" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png">&nbsp;&nbsp;&nbsp;
<img height="50" title="React" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png">&nbsp;&nbsp;&nbsp;
<img height="50" title="Redux" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png">&nbsp;&nbsp;&nbsp;
<img height="50" title="Webpack" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webpack.png">&nbsp;&nbsp;&nbsp;

[Leaflet](https://github.com/Leaflet/Leaflet) - JS-библиотека для отображения карт на веб-сайтах

## Сборка и запуск проекта 

Установка зависимостей:
```
npm install
```
Запуск Development-сервера:
```
npm start
```

## Скриншоты

<details><summary><b>Развернуть</b></summary>

![image](https://github.com/user-attachments/assets/02694a60-61d1-4848-850e-64509d041c58)

![image](https://github.com/user-attachments/assets/b5db34ea-661d-46d9-bf38-2e52026b4e6f)

![image](https://github.com/user-attachments/assets/6d707bef-057d-40a4-be3c-be48bb795df9)

![image](https://github.com/user-attachments/assets/be2972ec-a1f2-43a0-9108-16caa9614dee)

![image](https://github.com/user-attachments/assets/87c92f28-cc66-401b-a509-aaf215b6a131)

![image](https://github.com/user-attachments/assets/a73dac7a-aa2a-45d1-991e-5a0a175341b4)

</details>

##
<a href="https://htmlacademy.ru/intensive/javascript"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/javascript/logo-for-github-2.png"></a>

Репозиторий создан для обучения на онлайн‑курсе «[Профессия «JavaScript-разработчик» со специализацией React](https://htmlacademy.ru/profession/react)» от [HTML Academy](https://htmlacademy.ru).
