/*
Optionale Aufgabe 1: Testen einer Komponente mit Props

Erstelle einen Test für eine React-Komponente, die Props verwendet und diese in der UI anzeigt.

Aufgabe:

Implementiere eine React-Komponente Greeting, die eine Prop user erhält und "Hello, [name]" anzeigt. Schreibe einen Jest-Test, der überprüft, ob der Benutzername korrekt angezeigt wird.
*/

import { render, screen } from '@testing-library/react';
import Greeting from './Greeting'
import React from "react"

describe('Greeting Component Rendering', () => {

    test('renders the greeting with the name', () => {

        render(<Greeting name="Marcus" />);

        const greetingElement = screen.getByText(/Hello, Marcus!/i);

        expect(greetingElement).toBeInTheDocument();
    });

})