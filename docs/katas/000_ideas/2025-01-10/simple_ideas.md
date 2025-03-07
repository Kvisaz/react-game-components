# 12 простых идей для React-приложений с useContext

## 1. Корзина покупок
- Глобальное состояние: список товаров в корзине
- Компоненты: список товаров, корзина, итоговая сумма
- Почему useContext: доступ к корзине из любого компонента

## 2. Переключатель темы
- Глобальное состояние: текущая тема (светлая/темная)
- Компоненты: кнопка переключения, компоненты с темизацией
- Почему useContext: единый источник темы для всего приложения

## 3. Простой текстовый редактор
- Глобальное состояние: текст, выбранный шрифт, размер
- Компоненты: поле ввода, панель инструментов, предпросмотр
- Почему useContext: общие настройки форматирования

## 4. Калькулятор с историей
- Глобальное состояние: история вычислений
- Компоненты: кнопки, дисплей, список истории
- Почему useContext: доступ к истории из разных частей приложения

## 5. Мини-плеер
- Глобальное состояние: текущий трек, состояние воспроизведения
- Компоненты: плеер, список треков, controls
- Почему useContext: управление воспроизведением из разных мест

## 6. Таймер помидора
- Глобальное состояние: время, режим работы/отдыха
- Компоненты: таймер, кнопки управления, статистика
- Почему useContext: доступ к состоянию таймера

## 7. Мини-опросник
- Глобальное состояние: ответы пользователя, текущий вопрос
- Компоненты: вопрос, варианты ответов, прогресс
- Почему useContext: отслеживание прогресса и ответов

## 8. Конвертер валют
- Глобальное состояние: выбранные валюты, курсы обмена
- Компоненты: селекторы валют, поле ввода суммы, результат
- Почему useContext: общие данные о валютах

## 9. Заметки с тегами
- Глобальное состояние: список заметок, активные теги
- Компоненты: список заметок, теги, форма создания
- Почему useContext: фильтрация по тегам

## 10. Мини-галерея
- Глобальное состояние: выбранное изображение, режим просмотра
- Компоненты: сетка изображений, просмотрщик, навигация
- Почему useContext: управление режимом просмотра

## 11. Генератор паролей
- Глобальное состояние: настройки генерации, история
- Компоненты: настройки, кнопка генерации, история
- Почему useContext: общие настройки генерации

## 12. Счётчик калорий
- Глобальное состояние: список продуктов, дневная норма
- Компоненты: форма добавления, список, итог
- Почему useContext: подсчёт общей суммы калорий

## Почему эти идеи подходят для начинающих:

1. **Простая логика:** каждое приложение имеет понятную функциональность
2. **Минимум компонентов:** 3-4 компонента достаточно
3. **Чёткая структура данных:** простые объекты без сложных вложенностей
4. **Очевидное применение useContext:** понятно, зачем нужно глобальное состояние
5. **Возможность быстрой реализации:** можно сделать за 1-2 дня

## Пример простой реализации (для корзины покупок):

```typescript
// Типы
interface Product {
  id: string;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Контекст
const CartContext = React.createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>(null!);

// Простой редьюсер
type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(
        item => item.product.id === action.product.id
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1 }]
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.productId)
      };

    default:
      return state;
  }
};
```

Каждая из этих идей может быть реализована за короткое время и служит хорошей практикой использования useContext в React.
