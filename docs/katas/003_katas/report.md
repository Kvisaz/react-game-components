# Отчет о выполнении

2 сентября 2024 года. Третий пакет кат. 

Общее впечатление - идешь ровно и хорошо. Эксперимент с добавлением React Memo - для обучения хорош, но в целом на таких простых компонентах он не нужен и вероятно лишь создаешь лишнюю нагрузку.

Второй аргумент React memo имеет смысл, только если у тебя логика проверки отличается от "проверить все параметры по умолчанию", так как мне серьезно кажется,  что сверку всех параметров memo и так делает по умолчанию.

Таким образом, лучше избегать пока memo в простых компонентах и второго аргумента memo если там просто сравниваются все параметры.

Если хочешь добавить чего-то, то можешь просто несколько готовых сториз вместо одной. 

### 1. Компонент "Аватар" (Avatar)

Работает по заданию - да. Хороший бонус - пропорциональное масштабирование буквы.

Код CSS - хороший

Код tsx:

1. Поскольку ты уже задаешь дефолтный параметр, проверять на длину уже не нужно, этот кусок лишний 
```typescript
 if (name.length === 0) {
      name = "O";
    }
```

2. React.memo - тут избыточный наверное, но в данном случае я считаю плюсом, что ты осваиваешь технологию и особенно второй аргумент memo.

### 2. Компонент "Разделитель" (Divider)

Работает по заданию - да.

Код CSS - обошлись без него

**Код tsx**

1. `isCentered` имеет смысл переименовать в margin
2. React.memo избыточен, если только я не пропускаю что-то важное, но тут рендер вроде легкий. Не удаляй, но в будущем используй memo для чего-то тяжелее, не знаю, если честно, как диагностировать.

### 3. Компонент "Иконка" (Icon)

Работает по заданию - да

Код CSS - оправданно отсутствует

Код tsx - считаю достаточно хорошим для прода, если не считать избыточного memo )

### 4. Компонент "Счетчик" (Counter)

Работает по заданию - да

Код CSS - оправданно отсутствует

Код tsx - memo для прода 

### 5. Компонент "Ссылка" (Link)

Работает по заданию - да

Код CSS - оправданно отсутствует

Код tsx - хорош, если не считать лишнего мемо
