import React from 'react'
import Paragraph from '../Paragraph'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Paragraph>paragraph text</Paragraph>)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
