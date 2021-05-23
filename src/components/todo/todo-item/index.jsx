import React from 'react';
import TodoItemStyled from './todo-item.styled';

const TodoItem = ({ children, id, removeItem }) => {
	const onCheckboxChange = () => {};

	return (
		<TodoItemStyled>
			<input
				type="checkbox"
				className="item item--incomplete"
				onChange={onCheckboxChange}
			/>
			<p>{children}</p>
			<button onClick={() => removeItem(id)}>X</button>
		</TodoItemStyled>
	);
};

export default TodoItem;
