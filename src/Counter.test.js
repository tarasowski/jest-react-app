/*
Optionale Aufgabe 3: Testen eines internen Zustands (useState)

Erstelle einen Test für eine Komponente, die einen internen Zustand verwendet, um ihre Darstellung zu ändern.

Aufgabe:
Implementiere eine Counter-Komponente, die einen Button enthält. Dieser soll beim Klicken den Zählerwert um +1 erhöhen.  Schreibe einen Jest-Test, der überprüft, ob der Counter immer bei 0 startet und ob bei bei Betätigung des Buttons der Zählerwert dementsprechend verändert wird.

*/

import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Counter from "./Counter"


describe('Counter Component Rendering', () => {

    test('Counter starts at 0', () => {
        render(<Counter />)
        const countElement = screen.getByText(/Count: 0/i)
        expect(countElement).toBeInTheDocument()
    })

    test('Counter increments by 1 when button is clicked', () => {
        render(<Counter />)
        const button = screen.getByRole('button')

        React.act(() => {
            fireEvent.click(button)
        })

        const countElement = screen.getByText(/Count: 1/i)
        expect(countElement).toBeInTheDocument()
    })
})