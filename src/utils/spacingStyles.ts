import { css, SerializedStyles } from '@emotion/core'
import { get } from './get'
import { ThemeConfig, Sizes, DirectionsSizes } from '../types'

/**
 *
 * @param theme
 * @param space
 * @param spaceType
 */
export function spacingStyles(
  theme: ThemeConfig,
  space: Sizes | 'auto' | DirectionsSizes = 'unset',
  spaceType: 'padding' | 'margin' = 'padding'
): SerializedStyles {
  if (typeof space === 'object') {
    return css(`
    ${spaceType}-top: ${
      get(space, 't')
        ? get(theme, 'root', 'spacing', space['t'] || 'unset')
        : ''
    };
    ${spaceType}-left: ${
      get(space, 'l')
        ? get(theme, 'root', 'spacing', space['l'] || 'unset')
        : ''
    };
    ${spaceType}-right: ${
      get(space, 'r')
        ? get(theme, 'root', 'spacing', space['r'] || 'unset')
        : ''
    };
    ${spaceType}-bottom: ${
      get(space, 'b')
        ? get(theme, 'root', 'spacing', space['b'] || 'unset')
        : ''
    };
  `)
  } else {
    return css(`
      ${spaceType}: ${space ? get(theme, 'root', 'spacing', space) : ''}
    `)
  }
}
