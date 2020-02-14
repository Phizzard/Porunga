import { SerializedStyles } from '@emotion/core'
import { ThemeConfig, Sizes, DirectionsSizes } from '../types'
/**
 *
 * @param theme
 * @param space
 * @param spaceType
 */
export declare function spacingStyles(
  theme: ThemeConfig,
  space?: Sizes | 'auto' | DirectionsSizes,
  spaceType?: 'padding' | 'margin'
): SerializedStyles
