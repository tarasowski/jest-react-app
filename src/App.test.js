import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// A test suite in Jest is defined using the describe function. It groups related test cases together, making it easier to organize and manage tests.
describe('App Component Rendering', () => {
    // This is part of Jest's syntax for defining a test.
    // A test case is defined using the test (or it) function within a test suite. Each test case contains specific logic to verify a particular aspect of the code.
    test('renders learn react link', () => {
        // The render function from RTL is used to render the <App /> component into a virtual DOM for testing.
        // This function returns an object that contains utility methods for querying the rendered output.
        render(<App />);

        // Here, screen.getByText is used to find an element in the rendered output that contains the text matching the regular expression /Click on the Vite/i.
        // The i flag makes this search case-insensitive, meaning it will match "Click on the Vite", "click on the vite", etc.
        const linkElement = screen.getByText(/Click on the Vite/i);

        // The expect function is used to create an assertion about linkElement.
        // This assertion checks whether linkElement exists in the document after rendering, confirming that the expected text is present.
        // assertion in german "Erwartung/Behauptung"
        expect(linkElement).toBeInTheDocument();
    });
})