import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from '../index';

const setup = () => render(<Todo />);

const addTodoButtonName = /add todo/i;
const addTodoTextboxName = /add todo:/i;

describe('Todo component', () => {
	beforeEach(() => {
		setup();
	});

	it('should render the component', () => {
		screen.getByRole('heading', {
			name: /todo app/i,
		});

		screen.getByRole('button', {
			name: addTodoButtonName,
		});
	});

	it('should add an item to the todo list', () => {
		userEvent.type(
			screen.getByRole('textbox', {
				name: addTodoTextboxName,
			}),
			'bananas',
		);

		userEvent.click(
			screen.getByRole('button', {
				name: addTodoButtonName,
			}),
		);

		expect(screen.getByText(/bananas/i)).toBeInTheDocument();
	});

	it('should remove an item from the list', () => {
		userEvent.type(
			screen.getByRole('textbox', {
				name: addTodoTextboxName,
			}),
			'bananas',
		);

		userEvent.click(
			screen.getByRole('button', {
				name: addTodoButtonName,
			}),
		);

		expect(screen.getByText(/bananas/i)).toBeInTheDocument();

		userEvent.click(
			screen.getByRole('button', {
				name: /remove item bananas/i,
			}),
		);

		expect(screen.queryByText(/bananas/i)).not.toBeInTheDocument();
	});
});
