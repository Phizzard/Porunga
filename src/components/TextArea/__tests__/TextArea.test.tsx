import React from 'react'
import renderer from 'react-test-renderer'
import TextArea from '../TextArea'

it('renders correctly', () => {
  const component = renderer.create(<TextArea />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
