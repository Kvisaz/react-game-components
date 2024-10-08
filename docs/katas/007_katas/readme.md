## 07 - Блок с тенью, Загружаемый контент и другие
[Выполнено - Отчет](report.md);

#### Требования
* писать компоненты в папке components
* Для каждого компонента создать отдельный файл `.tsx` и соответствующий файл `.stories.tsx` для Storybook.
* Использовать TypeScript для типизации пропсов.
* писать чистый и понятный код
* разрешается использовать ранее сделанные компоненты, если они подходят по функционалу без доработок
* если нужны встроенные компоненты для текущего компонента - складывай их внутри собственной папки components в папке component
* разрешается вовсе не использовать компоненты и городить пока сколь угодно сложное дерево JSX,  если в задаче не сказано обратное
* условия задачи имеют приоритет над описанными общими требованиями


#### 1. Компонент "Блок с тенью" (ShadowBox)

**Задача:** Создать функциональный компонент `ShadowBox`, который принимает пропс `children` (ReactNode) и отображает своих потомков внутри блока `<div>` с тенью.

**Визуальное тестирование:**
* При рендеринге компонента `ShadowBox` с любым содержимым внутри, на странице отображается блок `<div>` с тенью и этим содержимым.

Для сториз - создать истории с несколькими ранее созданными компонентами, к примеру, Карточка товара, Цитата, Текст с подчеркиванием

#### 2. Компонент "Загружаемый контент" (LoadingContent)

* **Задача:** Создать функциональный компонент `LoadingContent`, который принимает пропсы `isLoading` (булево значение) и `children` (ReactNode). Если `isLoading` равен `true`, отображается спиннер. В противном случае отображаются потомки компонента

* **Визуальное тестирование:**
    * При рендеринге компонента `LoadingContent` с пропсом `isLoading=true`, на странице отображается спиннер.
    * При рендеринге компонента `LoadingContent` с пропсом `isLoading=false` и любым содержимым внутри, на странице отображается это содержимое.
    * допускается разница высоты в разных режимах isLoading (увеличение при появлении контента)

Для сториз - создать истории с несколькими ранее созданными компонентами на свой выбор.

#### 3. Компонент "Всплывающая подсказка" (Tooltip)

**Задача:** Создать функциональный компонент `Tooltip`, который принимает пропсы
- `text` (строка) для текста подсказки
- `children` (ReactNode) для элемента, при наведении на который должна появляться подсказка.

Подсказка должна появляться при наведении курсора мыши на элемент.

Фон компонента - светло-серый или светло-бежевый, любой светлый оттенок на твое усмотрение,  чтобы выделять цитату на фоне текста

**Визуальное тестирование:**
* При рендеринге компонента `Tooltip` с пропсом `text="Дополнительная информация"` и любым элементом внутри, при наведении курсора мыши на этот элемент появляется подсказка с текстом "Дополнительная информация".

Компонент должен быть inline, то есть не ломать текст при встраивании

Для сториз - подготовить тестовый компонент с текстом, внутри которого выводится

#### 4. Компонент "Список с полосами прокрутки" (ScrollableList)

* **Задача:** Создать функциональный компонент `ScrollableList`, который принимает пропс `items` (массив строк) и отображает список с вертикальной полосой прокрутки. Высота списка ограничена и составляет 100% от родителя.

* **Визуальное тестирование:**
    * При рендеринге компонента `ScrollableList` с пропсом `items` содержащим большое количество элементов, на странице отображается список с вертикальной полосой прокрутки.

#### 5. Компонент "Кнопка с иконкой" (IconButton)

* **Задача:** Создать функциональный компонент `IconButton`, который принимает пропсы `icon` (ReactNode) для иконки и `onClick` (функция) для обработки клика. Кнопка отображает переданную иконку.

* **Визуальное тестирование:**
    * При рендеринге компонента `IconButton` с любой иконкой, на странице отображается кнопка с этой иконкой.
    * при клике в консоли выводится тестовое сообщение с название компонента

Для сториз - рекомендуется как icon использовать ранее созданный компонент Icon и Image
Рекомендуется три сториз с разными иконками
