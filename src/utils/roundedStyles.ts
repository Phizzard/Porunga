import { css, SerializedStyles } from '@emotion/core'
import { get } from './get'
import { ThemeConfig, Rounded } from '../types'

/**
 *
 * @param rounded
 * @param theme
 * @param componentKey
 */
export function roundedStyles(
  rounded: Rounded,
  theme: ThemeConfig,
  componentKey: 'box'
): SerializedStyles {
  if (typeof rounded === 'object') {
    return css(`
    border-top-left-radius: ${
      get(rounded, 'tl') ? get(theme, componentKey, 'rounded') : ''
    };
    border-top-right-radius: ${
      get(rounded, 'tr') ? get(theme, componentKey, 'rounded') : ''
    };
    border-bottom-right-radius: ${
      get(rounded, 'br') ? get(theme, componentKey, 'rounded') : ''
    };
    border-bottom-left-radius: ${
      get(rounded, 'bl') ? get(theme, componentKey, 'rounded') : ''
    };
  `)
  } else {
    return css(`
      border-radius: ${rounded ? get(theme, componentKey, 'rounded') : ''}
    `)
  }
}