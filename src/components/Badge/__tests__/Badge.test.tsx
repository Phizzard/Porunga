import React from 'react'
import Badge from '../Badge'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Badge />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
