# ISN_2020_25
webovio.webflow.io
tailwind watch: 
    npx tailwindcss -i ./main.css -o ./dist/output.css --watch
Почитать: https://learn.javascript.ru/symbol
вариант №6: '743252'.split('').map((digit) => +digit + 6).reduce((a, b) => a + b) % 6 + 1
дизайн: https://www.figma.com/file/ggUbe447zWXu49WHJxkgx6/6?type=design&node-id=0-2&mode=design&t=jAMFpj1yJxlJ3NA3-0
иконки: https://github.com/aniftyco/awesome-tailwindcss
помошники для вёрстки: 
    https://tailblocks.cc/
    https://tailwind.build/
    https://tailwindcomponents.com/
    https://heroicons.com/
Задание:
    1. В форме всплывающего уведомления (https://github.com/jaredreich/notie) добавить на все кнопки сообщение: 
        "Я это сделал, а @UserName тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”."
        ???Ввод @UserName обязателен при первом выводе окна. Последующие выводы сообщений не должны требовать ввода @UserName.
            имеется в виду input чтоли?
    2. Перед отображением страницы на 543 мс отобразить по центру экрана “Загрузка страницы … “ (https://tailwindcomponents.com/component/full-page-overlay-loading-screen или https://codepen.io/damcclean/pen/GRoRRdR)
    3. Все кнопки должны иметь модальные окна, стилизованные под общую тему оформления с сообщением “Макет был реализован {Ф.И.О. разработчика}. Вариант № {номер варианта}”.
        https://tailwindcomponents.com/component/modal-transition-animation
    4. При проверке работы учитывается корректное отображение страницы в:
        • браузер с полноэкранным разрешением 1920х1080;
        • Apple iphone 12
        • Google pixel 5
        • Apple ipad mini
