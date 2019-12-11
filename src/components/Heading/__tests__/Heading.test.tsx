import React from 'react'
import Heading from '../Heading'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Heading>Heading</Heading>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
