import React from 'react'
import { useTheme } from 'emotion-theming'
import { roundedStyles } from '../../utils/roundedStyles'

import {
  Sizes,
  FlexDirection,
  Palette,
  BorderStyles,
  Rounded,
  ThemeConfig,
  DirectionsSizes,
} from '../../types'
import { get } from '../../utils/get'
import { Container } from './style'
import { spacingStyles } from '../../utils/spacingStyles'

export type BoxProps = {
  /** How to align the contents along the cross axis. */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch'
  /** How to align the contents when there is extra space in the cross axis. */
  alignContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'stretch'
  /** How to align along the cross axis when contained in a Box or along the column axis when contained in a Grid. */
  alignSelf?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch'
  /** The DOM tag or react component to use for the element. */
  as?: string | Function
  /** A fixed or relative size along its container's main axis. */
  basis?: Sizes
  /** A backgroundColor identifier */
  backgroundColor?: Palette
  /** A borderColor identifier */
  borderColor?: Palette
  /** A borderStyle identifier */
  borderStyle?: BorderStyles
  /** A size identifier */
  borderWidth?: Sizes
  /** A class */
  className?: string
  /** Content inside the Box element */
  children?: React.ReactNode
  /** Specifies the direction of the child items */
  direction?: FlexDirection
  /** How much of the remaining space in the flex container should be assigned to the box */
  grow?: number
  /** The fixed height */
  height?: Sizes
  /** How to align the contents along the main axis. */
  justifyContent?:
    | 'space-around'
    | 'space-between'
    | 'center'
    | 'flex-end'
    | 'space-evenly'
    | 'flex-start'
    | 'stretch'
  /** The amount of margin around the box contents.  DirectionSizes: {t: enum, r: enum, l: enum, b: enum} */
  margin?: Sizes | 'auto' | DirectionsSizes
  /** How round the corners are of the box */
  rounded?: Rounded
  /** The amount of box shadow applied to box */
  shadow?: Sizes
  /** If the size of all flex items is larger than the flex container, items shrink to fit accordingly */
  shrink?: number
  /** The amount of padding around the box contents. DirectionSizes: {t: enum, r: enum, l: enum, b: enum} */
  padding?: Sizes | 'auto' | DirectionsSizes
  /** Specifies if child elements should fall to a new row if they don't fit */
  wrap?: 'wrap' | 'wrap-reverse' | 'no-wrap'
  /** The fixed width */
  width?: Sizes
}

const Box = ({
  children,
  as = '',
  alignContent = 'stretch',
  alignItems = 'stretch',
  alignSelf = 'baseline',
  basis = 'unset',
  backgroundColor = 'transparent',
  borderColor = 'transparent',
  borderStyle = 'none',
  borderWidth = 'unset',
  className = '',
  direction = 'row',
  grow,
  height = 'unset',
  justifyContent = 'stretch',
  padding = 'unset',
  rounded,
  shadow = 'unset',
  shrink,
  margin = 'unset',
  wrap = 'no-wrap',
  width = 'unset',
}: BoxProps) => {
  const theme: ThemeConfig = useTheme()

  const roundedProps = roundedStyles(theme, rounded, 'box')
  const paddingProps = spacingStyles(theme, padding, 'padding')
  const marginProps = spacingStyles(theme, margin, 'margin')

  const boxProps = {
    alignContent,
    alignItems,
    alignSelf,
    as,
    backgroundColor: get(theme, 'root', 'colors', backgroundColor),
    basisProp: get(theme, 'root', 'sizes', basis),
    borderColor: get(theme, 'root', 'colors', borderColor),
    borderStyle: borderStyle,
    borderWidth: get(theme, 'root', 'borderSizes', borderWidth),
    className,
    directionProp: direction,
    grow,
    justifyContent,
    heightProp: get(theme, 'root', 'sizes', height),
    margin: marginProps,
    rounded: roundedProps,
    shadow: get(theme, 'root', 'shadows', shadow),
    shrink,
    padding: paddingProps,
    wrapProp: wrap,
    widthProp: get(theme, 'root', 'sizes', width),
  }

  return <Container {...boxProps}>{children}</Container>
}

export default Box
