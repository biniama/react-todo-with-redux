import React from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos }) => (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)