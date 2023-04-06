# WebAPI_JS_PetProject
Web-API приложение на контроллере с Fetch API (JS) запросами HTTP. 03.2023

Архитектурная реализация:
 - Модели данных: Student, Course, Enrollment;
 - БД SqlServer с тестовыми данными;
 - загрузка статических страниц с динамической подгрузкой данных
   (через element.setAttribute('href', `/studentPage.html?id=${item.id}`);).

Реализованы страницы:
 - Список студентов;
 - Информация по одному студенту.
