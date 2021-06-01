import styled from 'styled-components';

const TodoStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	background: rgb(238, 174, 202);
	background: linear-gradient(
		90deg,
		rgba(238, 174, 202, 1) 0%,
		rgba(148, 187, 233, 1) 100%
	);
	height: 100vh;

	form {
		background: white;
	}
`;

const FormStyled = styled.section`
	background: white;
	padding: 2%;
	border-radius: 0.2rem;
`;

const AddButton = styled.button`
	background-color: #267fe8;
	color: white;
	border-radius: 3px;
	border: none;
	padding: 0.5rem 1rem;
	height: 2.4rem;
	cursor: pointer;

	&:hover {
		filter: hue-rotate(90deg);
	}
`;

const TodoInput = styled.input`
	margin: 0 0.1rem;
	height: 2rem;
`;

export default TodoStyled;
export { FormStyled, AddButton, TodoInput };
