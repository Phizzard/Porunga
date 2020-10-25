import React from 'react'
import renderer from 'react-test-renderer'
import Skeleton from '../Skeleton'

it('renders correctly', () => {
  const component = renderer.create(<Skeleton />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
