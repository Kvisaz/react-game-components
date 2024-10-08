## 03 - 5 задач на создание React компонентов (Gemini)

[Выполнено - Отчет](report.md);

### Требования
* писать компоненты в папке components
* Для каждого компонента создать отдельный файл `.tsx` и соответствующий файл `.stories.tsx` для Storybook.
* Использовать TypeScript для типизации пропсов.
* писать чистый и понятный код
* разрешается использовать ранее сделанные компоненты, если они подходят по функционалу без доработок
* если нужны встроенные компоненты для текущего компонента - складывай их внутри собственной папки components в папке component
* разрешается вовсе не использовать компоненты и городить пока сколь угодно сложное дерево JSX,  если в задаче не сказано обратное
* условия задачи имеют приоритет над описанными общими требованиями

### 1. Компонент "Аватар" (Avatar)

**Задача:** Создать функциональный компонент `Avatar`, пропсы
*  `size` (число)
*  name (string)
   и отображает круглый аватар с заданным размером (в пикселях), серым фоном и первой буквой name, которая центрируется внутри аватара, отображается черным цветом и в верхнем регистре

**Визуальное тестирование:**
* При рендеринге компонента `Avatar` с пропсом `size={50}` и name={'Kofw'}, на странице отображается круглый аватар диаметром 50 пикселей с серым фоном и буквой K в центре

### 2. Компонент "Разделитель" (Divider)

**Задача:** Создать функциональный компонент `Divider`, который отображает горизонтальную линию-разделитель заданного цвета, толщины и длины на 100% от родителя.

пропсы
- color: string
- height: number
- widthPercent?: number - опциональный пропс для длины, передает длину в процентах, если не указан, принимает значение 100


**Визуальное тестирование:**
* При рендеринге компонента `Divider`, на странице отображается горизонтальная линия заданного цвета и заданной высоты.

### 3. Компонент "Иконка" (Icon)

**Задача:** Создать функциональный компонент `Icon`, который принимает пропс `name` (строка) и отображает иконку из заранее определенного набора иконок (например, можно использовать Font Awesome).

**Визуальное тестирование:**
* При рендеринге компонента `Icon` с пропсом `name="search"`, на странице отображается иконка поиска.

### 4. Компонент "Счетчик" (Counter)

**Задача:** Создать функциональный компонент `Counter`, который отображает число из пропса **count**

**Визуальное тестирование:**
* При рендеринге компонента `Counter`, на странице отображается число  **count**.

### 5. Компонент "Ссылка" (Link)

**Задача:** Создать функциональный компонент `Link`, который принимает пропсы `href` (строка) и `text` (строка) и отображает ссылку `<a>` с заданным URL и текстом.

Ссылка должна открываться в новом окне (новой вкладке для современных браузеров)

**Визуальное тестирование:**
* При рендеринге компонента `Link` с пропсами `href="https://www.google.com"` и `text="Google"`, на странице отображается ссылка "Google", которая ведет на сайт Google.


