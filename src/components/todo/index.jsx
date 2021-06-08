import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GrAdd } from 'react-icons/gr';

import TodoStyled, { FormStyled, AddButton, TodoInput } from './todo.styled';
import TodoItem from './todo-item';

const Todo = () => {
	const [todo, setTodo] = useState({});
	const [todoList, setTodoList] = useState([]);
	const formRef = useRef();

	const onInputChange = (e) => {
		setTodo({ uuid: uuidv4(), value: e.target.value });
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		setTodoList([...todoList, todo]);
		formRef.current.reset();
	};

	const removeItem = (removeUuid) => {
		const itemList = [...todoList];

		const updatedList = itemList.filter(({ uuid }) => {
			return uuid !== removeUuid;
		});

		setTodoList(updatedList);
	};

	return (
		<TodoStyled>
			<h1>Todo App</h1>
			<FormStyled>
				<form ref={formRef}>
					<label htmlFor="addTodo">Add todo: </label>
					<TodoInput
						id="addTodo"
						name="todo-input"
						onChange={onInputChange}
						placeholder="Todo"
					/>
					<AddButton
						id="add-todo-button"
						aria-label="Add todo"
						onClick={onFormSubmit}
					>
						<GrAdd />
					</AddButton>
				</form>

				{todoList.map((todo, idx) => {
					return (
						<TodoItem
							id={todo.uuid}
							key={todo.uuid}
							removeItem={removeItem}
							value={todo.value}
						/>
					);
				})}
			</FormStyled>
		</TodoStyled>
	);
};

export default Todo;
