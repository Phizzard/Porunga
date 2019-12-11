import React from 'react'
import Text from '../Text'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Text>text</Text>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
