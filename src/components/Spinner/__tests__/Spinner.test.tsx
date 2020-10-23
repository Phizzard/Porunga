import React from 'react'
import Spinner from '../Spinner'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(<Spinner />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
