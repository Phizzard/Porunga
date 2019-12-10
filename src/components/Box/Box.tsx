import React from 'react'
import { useTheme } from 'emotion-theming'

import {
  Sizes,
  FlexDirection,
  Palette,
  BorderStyles,
  ThemeConfig,
} from '../../types'
import { get } from '../../utils/get'
import { Container } from './style'

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
  /** A backgroundColor identifier */
  backgroundColor?: Palette
  /** A borderColor identifier */
  borderColor?: Palette
  /** A borderStyle identifier */
  borderStyle?: BorderStyles
  /** A size identifier */
  borderWidth?: Sizes
  /** Content inside the Box element */
  children?: React.ReactNode
  /** Specifies the direction of the child items */
  direction?: FlexDirection
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
  /** The amount of margin around the box contents. */
  margin?: Sizes
  /** The amount of padding around the box contents. */
  padding?: Sizes
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
  backgroundColor = 'transparent',
  borderColor = 'transparent',
  borderStyle = 'none',
  borderWidth = 'unset',
  direction = 'row',
  height = 'unset',
  justifyContent = 'stretch',
  padding = 'unset',
  margin = 'unset',
  wrap = 'no-wrap',
  width = 'unset',
}: BoxProps) => {
  const theme: ThemeConfig = useTheme()

  const boxProps = {
    alignContent,
    alignItems,
    alignSelf,
    as,
    backgroundColor: get(theme, 'root', 'colors', backgroundColor),
    borderColor: get(theme, 'root', 'colors', borderColor),
    borderStyle: borderStyle,
    borderWidth: get(theme, 'root', 'borderSizes', borderWidth),
    directionProp: direction,
    justifyContent,
    heightProp: get(theme, 'root', 'sizes', height),
    margin: get(theme, 'root', 'spacing', margin),
    padding: get(theme, 'root', 'spacing', padding),
    wrapProp: wrap,
    widthProp: get(theme, 'root', 'sizes', width),
  }

  return <Container {...boxProps}>{children}</Container>
}

export default Box
