import React from 'react'
import renderer from 'react-test-renderer'
import RadioButton from '../RadioButton'

it('renders correctly', () => {
  const component = renderer.create(
    <RadioButton name="radio" value="one" label="One"></RadioButton>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
