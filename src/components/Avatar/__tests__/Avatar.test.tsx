import React from 'react'
import renderer from 'react-test-renderer'
import Avatar from '../Avatar'

it('renders correctly', () => {
  const component = renderer.create(<Avatar text="KB" round={false} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
