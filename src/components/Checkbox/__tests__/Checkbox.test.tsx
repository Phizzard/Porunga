import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from '../Checkbox'

it('renders correctly', () => {
  const component = renderer.create(<Checkbox />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
