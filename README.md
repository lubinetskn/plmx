## Frontend PLMX

#### стайлгайды и сторонние документации:

- основной стек:

  - <https://ru.reactjs.org> - react

  - <https://redux.js.org/> - redux

  - <https://redux-saga.js.org> - saga

  - <https://redux-toolkit.js.org> - redux-toolkit

#### Описание проекта

PLM СТМ - это система управления жизненным циклом СТМ товара

#### Ссылки на прод и стейдж

http://forntend.plmx.xcloud-dev.x5.ru/

#### Основные технологии, ссылки на либы

- <https://ru.reactjs.org> - react

- <https://redux.js.org/> - redux

- <https://redux-saga.js.org> - saga

- <https://redux-toolkit.js.org> - redux-toolkit

- Инструменты:
  - material-ui: <https://material-ui.com>
  - styled-components: <https://styled-components.com>
  - Тесты: <https://github.com/puppeteer/puppeteer>

#### Инициализация проекта

    yarn install

#### Запуск development сервера

    yarn start

#### Билд приложения production

    yarn build

#### Запуск линтера/тестов

    yarn check

#### Структура проекта

- assets:
  - картинки
  - основные стили
- components - умные компоненты, которые обращаются к стору редакса
- features - вьюхи для routes
- redux - хранилище проекта разделенное частями
- types - типы используемые в приложении
- router - компоновка навигации
- shared - переиспользуемые компоненты, функции и тп. Отсюда импортируем theme в котором основные константы (цвета,
  отступы, размеры шрифта)
- ui - глупые компоненты. Примеры использования добавлены в storybook
  - Select - селекторы
  - Modal - кнопки
  - Table - таблицы
  - Tooltip - подсказки при наведении
