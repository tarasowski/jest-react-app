import '@testing-library/jest-dom';

// jest.setup.js
Object.defineProperty(HTMLFormElement.prototype, 'requestSubmit', {
    configurable: true,
    value: jest.fn(),
});