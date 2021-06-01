import React, { useState } from 'react';
import TodoItemStyled, {
	CompleteButton,
	RemoveButton,
} from './todo-item.styled';

const TodoItem = ({ value, id, removeItem, onEditChangeItem }) => {
	const [itemComplete, setItemComplete] = useState(false);
	const [inEditMode, setInEditMode] = useState(false);

	const onCompleteClick = (e) => {
		e.preventDefault();

		setItemComplete(!itemComplete);
	};

	const editItem = () => {
		setInEditMode(!inEditMode);
	};

	return (
		<TodoItemStyled>
			{!inEditMode && (
				<p
					className={`item item--${
						itemComplete ? 'complete' : 'incomplete'
					}`}
				>
					{value}
				</p>
			)}
			{inEditMode && (
				<input type="text" onChange={onEditChangeItem} value={value} />
			)}
			<CompleteButton onClick={onCompleteClick}>?</CompleteButton>
			<RemoveButton onClick={() => removeItem(id)}>X</RemoveButton>
			{/* <button onClick={() => editItem()}>Edit</button> */}
		</TodoItemStyled>
	);
};

export default TodoItem;
