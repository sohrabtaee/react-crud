import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddNoteButton from '~/components/AddNoteButton'

describe('Add Note Button', () => {
  it('should render the button', () => {
    render(<AddNoteButton />)
    const element = screen.getByTestId('button')

    expect(element).toHaveTextContent('Add a note')
  })
})
