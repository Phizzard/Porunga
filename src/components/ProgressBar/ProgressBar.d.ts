import { Palette } from '../../types'
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
export declare function flatten(value: number): number
/**
 * Get a string representation of the percentage
 *
 * @param value the progress bar value
 */
export declare function getStringPercent(value: number): string
/**
 * The ProgressBar component allows the user to create a flexible progress bar for use
 * in everything from loading states to step counters. You can choose to show the current
 * percent, a custom value, or add an optional rounding for the borders of the progress bar.
 */
declare const ProgressBar: ({
  value,
  color,
  showValue,
  customText,
  textColor,
  rounded,
  className,
}: ProgressBarProps) => JSX.Element
export default ProgressBar
