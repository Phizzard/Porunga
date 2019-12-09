import React from 'react'
import Box from '../Box'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Box />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
