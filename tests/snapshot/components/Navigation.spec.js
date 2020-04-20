import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navigation from '~/components/Navigation'

describe('Navigation', () => {
  it('should render the navigation', () => {
    const { container } = render(<Navigation />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
