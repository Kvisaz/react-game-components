# Техническое задание: Личный Органайзер Задач

## Описание проекта

Разработать React-приложение для управления личными задачами и привычками. Приложение должно помогать пользователю организовывать свои дела, отслеживать привычки и видеть прогресс.

## Технические требования

### Основные технологии
- React с функциональными компонентами
- TypeScript для типизации
- useContext для глобального состояния
- useReducer для управления состоянием
- localStorage для сохранения данных

### Структура данных

```typescript
// Типы данных
interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string | null;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  repeat?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    endDate?: string;
  };
}

interface Habit {
  id: string;
  title: string;
  description: string;
  frequency: 'daily' | 'weekly';
  progress: {
    date: string;
    completed: boolean;
  }[];
  startDate: string;
  active: boolean;
}

interface AppState {
  tasks: Task[];
  habits: Habit[];
  tags: string[];
  filters: {
    showCompleted: boolean;
    selectedTags: string[];
    priorityFilter: string | null;
  };
}

type AppAction =
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'UPDATE_TASK'; task: Task }
  | { type: 'DELETE_TASK'; taskId: string }
  | { type: 'TOGGLE_TASK'; taskId: string }
  | { type: 'ADD_HABIT'; habit: Habit }
  | { type: 'UPDATE_HABIT'; habit: Habit }
  | { type: 'DELETE_HABIT'; habitId: string }
  | { type: 'TOGGLE_HABIT'; habitId: string; date: string }
  | { type: 'ADD_TAG'; tag: string }
  | { type: 'UPDATE_FILTERS'; filters: Partial<AppState['filters']> };
```

## Компоненты

### 1. TaskBoard
Основной компонент для отображения и управления задачами.

Функциональность:
- Отображение списка задач с возможностью фильтрации
- Добавление новой задачи
- Отметка выполнения задачи
- Редактирование существующей задачи
- Удаление задачи

```typescript
interface TaskBoardProps {
  // Компонент использует данные из глобального контекста
}

const TaskBoard: React.FC<TaskBoardProps> = () => {
  // Использование хуков
  const { state, dispatch } = useContext(AppContext);
  
  // Обработчики
  const handleAddTask = (task: Omit<Task, 'id'>) => {
    dispatch({
      type: 'ADD_TASK',
      task: { ...task, id: generateId() }
    });
  };
  
  // JSX
  return (
    <div>
      <TaskFilters />
      <TaskList tasks={state.tasks} />
      <AddTaskForm onSubmit={handleAddTask} />
    </div>
  );
};
```

### 2. HabitTracker
Компонент для отслеживания привычек.

Функциональность:
- Отображение списка привычек
- Добавление новой привычки
- Отметка выполнения привычки за определенный день
- Просмотр прогресса по каждой привычке

```typescript
interface HabitTrackerProps {
  // Компонент использует данные из глобального контекста
}

const HabitTracker: React.FC<HabitTrackerProps> = () => {
  // Использование хуков
  const { state, dispatch } = useContext(AppContext);
  
  // Обработчики
  const handleToggleHabit = (habitId: string, date: string) => {
    dispatch({
      type: 'TOGGLE_HABIT',
      habitId,
      date
    });
  };
  
  // JSX
  return (
    <div>
      <HabitList habits={state.habits} />
      <AddHabitForm />
      <HabitProgress habits={state.habits} />
    </div>
  );
};
```

### 3. Calendar
Компонент для отображения задач и привычек в календарном виде.

Функциональность:
- Отображение календаря на месяц
- Показ задач и привычек на конкретные даты
- Быстрое добавление задачи на выбранную дату

```typescript
interface CalendarProps {
  // Компонент использует данные из глобального контекста
}

const Calendar: React.FC<CalendarProps> = () => {
  const { state } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <div>
      <CalendarGrid 
        date={selectedDate}
        tasks={state.tasks}
        habits={state.habits}
      />
      <DayDetails date={selectedDate} />
    </div>
  );
};
```

### 4. ProgressDashboard
Компонент для отображения общей статистики и прогресса.

Функциональность:
- Показ процента выполненных задач
- Статистика по привычкам
- Графики прогресса

```typescript
const ProgressDashboard: React.FC = () => {
  const { state } = useContext(AppContext);
  
  const calculateStats = () => {
    // Расчет статистики
    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter(t => t.completed).length;
    
    return {
      taskCompletion: totalTasks ? (completedTasks / totalTasks) * 100 : 0,
      // Другие показатели
    };
  };
  
  return (
    <div>
      <StatisticsSummary stats={calculateStats()} />
      <ProgressCharts data={state} />
    </div>
  );
};
```

## Глобальное состояние

### 1. Контекст приложения

```typescript
const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>(null!);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
```

### 2. Редьюсер

```typescript
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.taskId
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    // Другие обработчики действий
    default:
      return state;
  }
};
```

## Порядок реализации

1. Создать базовую структуру проекта
2. Реализовать контекст и редьюсер
3. Создать основные компоненты без стилизации
4. Реализовать функционал управления задачами
5. Добавить функционал привычек
6. Реализовать календарь
7. Добавить статистику и графики
8. Реализовать сохранение в localStorage
9. Добавить фильтрацию и поиск
10. Провести тестирование и отладку

## Требования к реализации

1. Все компоненты должны быть функциональными
2. Использовать TypeScript для типизации всех props и состояний
3. Обязательно использовать useContext и useReducer для управления состоянием
4. Реализовать сохранение данных в localStorage
5. Обеспечить обработку ошибок и валидацию данных
6. Следовать принципам чистых функций
7. Избегать пропс-дриллинга, используя контекст

## Дополнительные требования

1. Код должен быть чистым и хорошо документированным
2. Все функции и компоненты должны иметь четкое назначение
3. Использовать осмысленные имена переменных и функций
4. Разделять логику и представление
5. Обеспечить масштабируемость приложения

## Результат

Готовое приложение должно позволять:
- Управлять задачами (создание, редактирование, удаление)
- Отслеживать привычки
- Просматривать календарь с задачами
- Видеть статистику и прогресс
- Сохранять данные между сессиями

Все взаимодействия должны быть интуитивно понятными и предсказуемыми для пользователя.
