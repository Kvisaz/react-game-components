import React, { useState } from "react";
import styles from "./TodoList.module.css";

interface Todo {
  text: string;
  isChecked: boolean;
  key: string;
}

interface TodoListProps {
  initialItems: Array<Todo>;
}

// const DefaultTodoListProps: TodoListProps = {
//   initialItems: [
//     {
//       text: "Помыть посуду",
//       isChecked: false,
//       key: "todo_1_Помытьпосу",
//     },
//     {
//       text: "Убраться в спальне",
//       isChecked: true,
//       key: "todo_2_Убратьсявс",
//     },
//     { text: "Проверить почту", isChecked: false, key: "todo_3_Проверитьп" },
//   ],
// };

export const TodoList = ({ initialItems }: TodoListProps) => {
  const [todos, setTodos] = useState<Array<Todo>>(initialItems);
  const [textareaValue, setTextareaValue] = useState("");

  const handleCheckboxChange = (key: string, isChecked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.key === key ? { ...todo, isChecked: isChecked } : todo
      )
    );
  };

  const handleDelete = (index: number, key: string) => {
    setTodos(todos.filter((todo, i) => i !== index && todo.key !== key));
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = textareaValue.trim();
    if (text !== "") {
      const newTodos = [...todos];
      newTodos.push({
        text,
        isChecked: false,
        key:
          "todo_" +
          (newTodos.length + 1) +
          "_" +
          text.slice(0, 10).replace(/ /g, ""),
      });
      setTodos(newTodos);
      console.log("added todo: ", todos[todos.length - 1]);
      setTextareaValue("");
    }
  };

  return (
    <div className={styles.box}>
      <h1 className={styles.head}>Todo List</h1>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => {
          return (
            <li className={styles.todo} key={todo.key + index}>
              <input
                className={styles.todoCheck}
                id={todo.key + "_checkbox" + index}
                type="checkbox"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleCheckboxChange(todo.key, event.target.checked)
                }
              />
              <p className={styles.todoText}>{todo.text}</p>
              <label
                className={styles.todoLabel}
                htmlFor={todo.key + "_checkbox" + index}
              />
              <button
                className={styles.todoButton}
                onClick={() => handleDelete(index, todo.key)}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.formTextarea}
          value={textareaValue}
          onChange={handleChange}
        />
        <button type="submit" className={styles.formButton}>
          Добавить
        </button>
      </form>
    </div>
  );
};
