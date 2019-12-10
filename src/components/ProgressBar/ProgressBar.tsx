import React from 'react'
import { useTheme } from 'emotion-theming'

import { get } from '../../utils/get'
import { ThemeConfig, Palette } from '../../types'
import { Container, StyledProgressBar } from './style'

/**
 * ProgressBar properties
 */
interface ProgressBarProps {
  /** The value of the progress bar (as percentage) */
  value?: number
  /** The color of the progress bar */
  color?: Palette
  /** Whether to add text in the progress bar */
  showValue?: boolean
  /** Text to display if custom */
  customText?: string
  /** Sets text color */
  textColor?: string
  /** Optionally round the progress bar */
  rounded?: boolean
  /** Optional class name */
  className?: string
}

/**
 * Normalize the value
 *
 * @param value the progress bar value
 */
export function flatten(value: number) {
  return Math.floor(value)
}

/**
 * Get a string representation of the percentage
 *
 * @param value the progress bar value
 */
export function getStringPercent(value: number) {
  return `${value}%`
}

/**
 * The ProgressBar component allows the user to create a flexible progress bar for use
 * in everything from loading states to step counters. You can choose to show the current
 * percent, a custom value, or add an optional rounding for the borders of the progress bar.
 */
const ProgressBar = ({
  value = 0,
  color = 'brand',
  showValue = false,
  customText = '',
  textColor = '#FFFFFF',
  rounded = false,
  className,
}: ProgressBarProps) => {
  const theme: ThemeConfig = useTheme()
  const flatVal = flatten(value)
  const valueAsString = getStringPercent(flatVal)
  const width = { width: valueAsString }
  const textToUse = showValue ? valueAsString : customText

  const progressBarProps = {
    color: get(theme, 'root', 'colors', color),
    text: textToUse,
    textColor,
  }

  return (
    <Container
      className={className}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={flatVal}
      role="progressbar"
      rounded={rounded}
    >
      <StyledProgressBar
        style={width}
        {...progressBarProps}
      ></StyledProgressBar>
    </Container>
  )
}

export default ProgressBar
