import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

import TodoItemStyled, {
	CompleteButton,
	RemoveButton,
} from './todo-item.styled';

const TodoItem = ({ value, id, removeItem }) => {
	const [itemComplete, setItemComplete] = useState(false);

	const onCompleteClick = (e) => {
		e.preventDefault();

		setItemComplete(!itemComplete);
	};

	return (
		<TodoItemStyled>
			<p
				className={`item item--${
					itemComplete ? 'complete' : 'incomplete'
				}`}
			>
				{value}
			</p>

			<CompleteButton
				aria-label={`Complete item ${value}`}
				onClick={onCompleteClick}
			>
				<TiTick />
			</CompleteButton>
			<RemoveButton
				aria-label={`Remove item ${value}`}
				onClick={() => removeItem(id)}
			>
				<BsTrash />
			</RemoveButton>
		</TodoItemStyled>
	);
};

export default TodoItem;
