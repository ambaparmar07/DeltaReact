import { useState } from "react";
import { v4 as uuid4 } from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{ task: "sample task", id: uuid4(), done: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuid4(), done: false }];
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        })
        ));
    }

    let UpperCaseOne = (id) => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            }
            else {
                return todo;
            }
        })
        ));
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            })
        ));
    }

    return (
        <div>
            <input placeholder="add a task" onChange={updateTodoValue} /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br /><br /><br />
            <hr />

            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                         <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.task}</span>
                         &nbsp; &nbsp; &nbsp;
                        <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
                        <button onClick={() => {UpperCaseOne(todo.id)}}>UpperCase One</button>
                        <button onClick={() => {markAsDone(todo.id)}}>mark as done</button>
                    </li>
                ))}
            </ul>

            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}