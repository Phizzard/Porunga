import React from 'react'
import renderer from 'react-test-renderer'

import ProgressBar, { flatten, getStringPercent } from '../ProgressBar'

describe('ProgressBar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ProgressBar />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('flatten', () => {
    it('should return a flat number', () => {
      const actual = flatten(55.4)
      const expected = 55

      expect(actual).toBe(expected)
    })
  })

  describe('getStringPercent', () => {
    it('should return a stringified percentage', () => {
      const actual = getStringPercent(80)
      const expected = '80%'

      expect(actual).toBe(expected)
    })
  })
})
