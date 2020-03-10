import React from 'react'
import {
  Sizes,
  FlexDirection,
  Palette,
  BorderStyles,
  Rounded,
  DirectionsSizes,
} from '../../types'
export declare type BoxProps = {
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
declare const Box: ({
  children,
  as,
  alignContent,
  alignItems,
  alignSelf,
  backgroundColor,
  borderColor,
  borderStyle,
  borderWidth,
  className,
  direction,
  grow,
  height,
  justifyContent,
  padding,
  rounded,
  shadow,
  shrink,
  margin,
  wrap,
  width,
}: BoxProps) => JSX.Element
export default Box
