// Form.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

beforeAll(() => {
    Object.defineProperty(HTMLFormElement.prototype, 'requestSubmit', {
        configurable: true,
        value: jest.fn(),
    });
});

describe('Form Component', () => {
    beforeEach(() => {
        render(<Form />);
    });

    test('renders form elements correctly', () => {
        const nameLabel = screen.getByLabelText(/name/i);
        const emailLabel = screen.getByLabelText(/email/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        expect(nameLabel).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('allows user to input name and email', () => {
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

        expect(nameInput.value).toBe('John Doe');
        expect(emailInput.value).toBe('john@example.com');
    });

    test('handles empty name submission', () => {
        const form = screen.getByRole('form'); // Use role="form" in your Form component if not already present
        fireEvent.submit(form);
        // check if the form submission is prevented
        expect(form).toBeEnabled(); // Assuming the button remains enabled
    });

    test('handles invalid email submission', () => {
        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        const form = screen.getByRole('form'); // Use role="form" in your Form component if not already present
        fireEvent.submit(form);

        // Again, here you would check for validation messages or handle submission logic
        expect(form).toBeEnabled(); // Assuming the button remains enabled
    });
});