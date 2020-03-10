import { SerializedStyles } from '@emotion/core'
import { ThemeConfig, Rounded } from '../types'
/**
 *
 * @param theme
 * @param rounded
 * @param componentKey
 */
export declare function roundedStyles(
  theme: ThemeConfig,
  rounded: Rounded,
  componentKey: 'box' | 'checkbox' | 'badge' | 'button'
): SerializedStyles
