import { css, SerializedStyles } from '@emotion/core'
import { get } from './get'
import { ThemeConfig, Rounded } from '../types'

/**
 *
 * @param theme
 * @param rounded
 * @param componentKey
 */
export function roundedStyles(
  theme: ThemeConfig,
  rounded: Rounded,
  componentKey:
    | 'box'
    | 'checkbox'
    | 'badge'
    | 'button'
    | 'progressBar'
    | 'input'
): SerializedStyles {
  rounded = isRootAllRounded(theme, rounded)

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

/**
 *
 * @param theme
 */
function isRootAllRounded(theme: ThemeConfig, rounded: Rounded) {
  return rounded === undefined ? get(theme, 'root', 'isAllRounded') : rounded
}
