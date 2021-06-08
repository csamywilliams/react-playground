import styled from 'styled-components';

const TodoItemStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-around;
	align-items: center;

	.item {
		flex: 1;
		justify-content: center;
		background-color: #f2f2f2;
		border-radius: 3px;
		margin: 0.5rem;

		&--complete {
			text-decoration: line-through;
		}

		&--incomplete {
			text-decoration: normal;
		}
	}
`;

const CompleteButton = styled.button`
	margin: 1%;
	background-color: #fff;
	border: 1px solid #aeb8e1;
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		filter: hue-rotate(90deg);
	}
`;

const RemoveButton = styled.button`
	margin: 1%;
	background-color: #fff;
	border: 1px solid #aeb8e1;
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		filter: hue-rotate(90deg);
	}
`;

export default TodoItemStyled;
export { CompleteButton, RemoveButton };
