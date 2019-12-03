import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Button />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
