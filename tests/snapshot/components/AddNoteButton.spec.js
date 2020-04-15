import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddNoteButton from '~/components/AddNoteButton'

describe('Add Note Button', () => {
  it('should render the button', () => {
    const { container } = render(<AddNoteButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
