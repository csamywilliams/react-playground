import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
		<div>
			<form ref={formRef}>
				<label htmlFor="addTodo">Add todo: </label>
				<input id="addTodo" onChange={onInputChange} />
				<button onClick={onFormSubmit}>+</button>
			</form>

			{todoList.map((todo, idx) => {
				return (
					<TodoItem
						id={todo.uuid}
						key={todo.uuid}
						removeItem={removeItem}
					>
						{todo.value}
					</TodoItem>
				);
			})}
		</div>
	);
};

export default Todo;
