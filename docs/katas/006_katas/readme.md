## 06 - TodoList и мелочь

#### Требования
* писать компоненты в папке components
* Для каждого компонента создать отдельный файл `.tsx` и соответствующий файл `.stories.tsx` для Storybook.
* Использовать TypeScript для типизации пропсов.
* писать чистый и понятный код
* разрешается использовать ранее сделанные компоненты, если они подходят по функционалу без доработок
* если нужны встроенные компоненты для текущего компонента - складывай их внутри собственной папки components в папке component
* разрешается вовсе не использовать компоненты и городить пока сколь угодно сложное дерево JSX,  если в задаче не сказано обратное
* условия задачи имеют приоритет над описанными общими требованиями


#### 1. Компонент "Список дел" (TodoList)

Создать функциональный компонент TodoList, который позволяет пользователю управлять списком дел: добавлять новые задачи, отмечать их как выполненные и удалять.
##### Пропсы:

- initialItems (опциональный): Массив строк, представляющий начальный список дел.
##### Функционал:

1. **Отображение списка:** Компонент отображает список всех дел. Каждая задача отображается с чекбоксом слева и кнопкой "Удалить" справа.

2. **Добавление новой задачи:** Под списком дел находится текстовое поле ввода и кнопка "Добавить". При вводе текста в поле и нажатии на кнопку "Добавить", новая задача добавляется в конец списка. Текстовое поле очищается.

3. **Отметка о выполнении:** При нажатии на чекбокс слева от задачи, текст задачи должен перечеркиваться, визуально показывая, что задача выполнена. Повторное нажатие на чекбокс снимает отметку о выполнении.

4. **Удаление задачи:** При нажатии на кнопку "Удалить" справа от задачи, задача удаляется из списка.

##### Визуальное тестирование:

- **Изначальное состояние:** При рендеринге компонента с пропсом initialItems, отображается список задач, соответствующий переданному массиву.

- **Добавление задачи:** После ввода текста в поле ввода и нажатия на кнопку "Добавить", новая задача появляется в конце списка.

- **Отметка о выполнении:** При нажатии на чекбокс, текст задачи перечеркивается или снимается перечеркивание.

- **Удаление задачи:** При нажатии на кнопку "Удалить", задача исчезает из списка.


##### Дополнительные требования:

- Использовать useState для хранения состояния списка дел.
- сохранять даннные между сеансами в localStorage
- Обрабатывать события изменения состояния чекбоксов и нажатия на кнопки.

##### Пример использования:
```
<TodoList initialItems={["Купить молоко", "Вынести мусор"]} />
```

#### 2. Компонент "Цитата" (Quote)

* **Задача:** Создать функциональный компонент `Quote`, который принимает пропсы `text` (строка) для цитаты и `author` (строка) для автора, и отображает цитату с указанием автора.

* **Визуальное тестирование:**
    * При рендеринге компонента `Quote` с пропсами `text="Лучший способ предсказать будущее - это создать его."` и `author="Авраам Линкольн"`, на странице отображается цитата "Лучший способ предсказать будущее - это создать его." с указанием автора "Авраам Линкольн".

#### 3. Компонент "Карточка товара" (ProductCard)

* **Задача:** Создать функциональный компонент `ProductCard`, который принимает пропсы `name` (строка) для названия товара, `price` (число) для цены и `image` (строка) для URL изображения, и отображает карточку товара с названием, ценой и изображением.

* **Визуальное тестирование:**
    * При рендеринге компонента `ProductCard` с пропсами `name="Футболка"` , `price=1000` и `image="https://example.com/tshirt.jpg"`, на странице отображается карточка товара с названием "Футболка", ценой "1000" и изображением с указанным URL.

#### 4. Компонент "Список тегов" (TagList)

Компонент TagList отображает набор тегов в виде визуально привлекательных и информативных элементов.

* **Задача:** Создать функциональный компонент `TagList`, который принимает пропс `tags` (массив строк) и отображает каждый тег внутри блока `<span>` с классом `tag`.

* **Визуальное тестирование:**
    * При рендеринге компонента `TagList` с пропсом `tags=["react", "javascript", "frontend"]`, на странице отображаются три блока `<span>` с классом `tag` и текстом "react", "javascript" и "frontend" соответственно.

##### Внешний вид:

- **Контейнер:** Теги располагаются в ряд с небольшим отступом между ними (4px). Контейнер не имеет фиксированной ширины и адаптируется под количество и размер тегов.

- **Теги:**
    - **Форма:** Каждый тег представляет собой прямоугольник с закругленными углами (радиус 4px).
    - **Цвет фона:** Используется ненавязчивый, светлый оттенок серого (#F0F0F0).
    - **Текст:** Текст тега отображается черным цветом, шрифтом среднего размера (14px), без начертания (regular).
    - **Внутренний отступ:** Текст тега имеет небольшой отступ от краев (padding: 8px 12px).

- **Состояния**:
    - **Наведение курсора:** При наведении курсора мыши на тег, его фон плавно темнеет до светло-голубого (#E0F2FF), указывая на интерактивность.

##### Визуальное тестирование

Для проверки соответствия дизайна компонента требованиям, можно использовать следующие тесты:

1. **Расположение и отступы:** Проверить, что теги располагаются в ряд с правильными отступами между собой.
2. **Форма и фон тегов:** Убедиться, что каждый тег имеет форму прямоугольника с закругленными углами и корректный цвет фона.
3. **Оформление текста:** Проверить размер, цвет и начертание шрифта текста тегов, а также внутренние отступы.
4. **Состояние наведения:** Убедиться, что при наведении курсора мыши на тег, его фон меняет цвет на светло-голубой.