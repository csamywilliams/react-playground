import styled from 'styled-components';

const TodoItemStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;

	.item {
		&--complete {
			text-decoration: line-through;
		}

		&--incomplete {
			text-decoration: normal;
		}
	}
`;

export default TodoItemStyled;
