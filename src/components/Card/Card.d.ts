import React from 'react'
declare type CardProps = {
  /** Content inside Card's content section */
  children: React.ReactNode
  /** Small muted text under card content */
  footerText?: string
  /** An object of image data that will render on top of the card */
  heroImage?: {
    position: 'top' | 'left' | 'right'
    alt: string
    src: string
    srcSet?: string
    sizes?: string
  }
  /** Whether or not to round the corners to the theme's specifcations */
  rounded?: boolean
  /** The main title in the card content area */
  title?: string
}
declare const Card: ({
  children,
  heroImage,
  title,
  rounded,
  footerText,
}: CardProps) => JSX.Element
export default Card
