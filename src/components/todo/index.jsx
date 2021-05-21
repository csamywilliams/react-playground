import React, { useState, useRef, useEffect } from 'react';

const Todo = () => {
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([]);
	const formRef = useRef();

	useEffect(() => {
		console.table(todoList);
	}, [todoList]);

	const onInputChange = (e) => {
		setTodo(e.target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		setTodoList([...todoList, todo]);
		formRef.current.reset();
	};

	return (
		<div>
			<form ref={formRef}>
				<label htmlFor="addTodo">Add todo: </label>
				<input id="addTodo" onChange={onInputChange} />
				<button onClick={onFormSubmit}>+</button>
			</form>

			{todoList.map((todo, idx) => {
				return <div key={idx}>{todo}</div>;
			})}
		</div>
	);
};

export default Todo;
