import React, { useState } from 'react';
import TodoItemStyled from './todo-item.styled';

const TodoItem = ({ children, id, removeItem }) => {
	const [itemComplete, setItemComplete] = useState(false);

	const onCheckboxChange = () => {
		setItemComplete(!itemComplete);
	};

	return (
		<TodoItemStyled>
			<input type="checkbox" onChange={onCheckboxChange} />
			<p
				className={`item item--${
					itemComplete ? 'complete' : 'incomplete'
				}`}
			>
				{children}
			</p>
			<button onClick={() => removeItem(id)}>X</button>
		</TodoItemStyled>
	);
};

export default TodoItem;
