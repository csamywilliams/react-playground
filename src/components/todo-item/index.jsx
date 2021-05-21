import React from 'react';

const TodoItem = ({ children, id, removeItem }) => {
	return (
		<div>
			<p>{children}</p>
			<button onClick={() => removeItem(id)}>X</button>
		</div>
	);
};

export default TodoItem;
