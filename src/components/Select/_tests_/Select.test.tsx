import React from 'react'
import Select from '../Select'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const component = renderer.create(
    <Select options={[{ label: 'a label', value: 'some value' }]} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
