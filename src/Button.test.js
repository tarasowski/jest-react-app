/*
Erstelle einen Test, der überprüft, ob bei einem Klick auf eine Schaltfläche eine Funktion aufgerufen wird.

Aufgabe:

Erstelle eine Button-Komponente, die eine Prop onClick annimmt. Diese Funktion soll aufgerufen werden, wenn auf den Button geklickt wird. Schreibe einen Jest-Test, der überprüft, ob die Funktion nach dem Klick aufgerufen wird.
*/

import { fireEvent, render, screen } from '@testing-library/react';
import Button from "./Button"
import React from "react"

describe('Button Component Rendering', () => {
    test('ruft onClick beim Klicken auf', () => {
        const handleClick = jest.fn() // mock

        render(<Button onClick={handleClick} />)

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalled()
    })
})