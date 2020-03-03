import React from 'react'
import styled from '@emotion/styled'

import { Container } from './style'
import { get } from '../../utils/get'
import Box from '../Box'
import Text from '../Text'
import Heading from '../Heading'

type CardProps = {
  /** Content inside Card's content section */
  children?: React.ReactNode
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
const Card = ({
  children,
  heroImage,
  title,
  rounded,
  footerText,
}: CardProps) => {
  const heroImagePositionMap: {
    top: 'column'
    right: 'row-reverse'
    left: 'row'
  } = {
    top: 'column',
    right: 'row-reverse',
    left: 'row',
  }
  return (
    <Container
      direction={get(heroImagePositionMap, get(heroImage, 'position') || 'top')}
      shadow="large"
      borderColor="light-4"
      borderWidth="xxsmall"
      borderStyle="solid"
      rounded={rounded}
    >
      {heroImage && (
        <Box
          rounded={rounded}
          margin="auto"
          width="full"
          height="full"
          justifyContent="center"
          alignItems="center"
        >
          <HeroImage
            alt={heroImage.alt}
            src={heroImage.src}
            srcSet={heroImage.srcSet}
            sizes={heroImage.sizes}
          />
        </Box>
      )}
      <Box direction="column">
        <Box direction="column" padding="medium" grow={1}>
          {title && <Heading level="h2">{title}</Heading>}
          {children}
        </Box>
        {footerText && (
          <Box width="full">
            <Box
              rounded={{ br: rounded, bl: rounded }}
              padding="medium"
              grow={1}
            >
              <Text size="small" color="dark-2">
                {footerText}
              </Text>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  )
}

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`

export default Card
