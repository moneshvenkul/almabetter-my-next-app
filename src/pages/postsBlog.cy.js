import React from 'react'
import Blog from './posts'

describe('<Blog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Blog />)
  })
})