import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from '../Checkbox'

it('renders correctly', () => {
  const component = renderer.create(<Checkbox />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})