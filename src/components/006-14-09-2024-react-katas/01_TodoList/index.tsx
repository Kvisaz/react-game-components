import React, { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

interface Todo {
  text: string;
  isChecked: boolean;
  key: string;
}

interface TodoListProps {
  initialItems?: Array<string>;
}

const createTodo = (text: string, index: number): Todo => ({
  text,
  isChecked: false,
  key: "todo_" + (index + 1) + "_" + text.slice(0, 10).replace(/ /g, ""),
});

export const TodoList = ({ initialItems }: TodoListProps) => {
  const [todos, setTodos] = useState<Array<Todo>>(() => {
    const saved = localStorage.getItem("todo_list");
    return saved !== null
      ? JSON.parse(saved)
      : initialItems !== undefined
        ? initialItems.map((text, index) => createTodo(text, index))
        : [];
  });
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(todos));
  }, [todos]);

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
      newTodos.push(createTodo(text, newTodos.length));
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
