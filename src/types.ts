export type Palette =
  | 'brand'
  | 'accent-1'
  | 'accent-2'
  | 'accent-3'
  | 'accent-4'
  | 'neutral-1'
  | 'neutral-2'
  | 'neutral-3'
  | 'neutral-4'
  | 'error'
  | 'warning'
  | 'success'
  | 'unknown'
  | 'disabled'
  | 'light-1'
  | 'light-2'
  | 'light-3'
  | 'light-4'
  | 'light-5'
  | 'light-6'
  | 'dark-1'
  | 'dark-2'
  | 'dark-3'
  | 'dark-4'
  | 'dark-5'
  | 'dark-6'
  | 'transparent'

export type Sizes =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'full'
  | 'unset'

export type Weight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | 'inherit'
  | 'initial'
  | 'unset'

export type Style =
  | 'normal'
  | 'italic'
  | 'oblique'
  | 'inherit'
  | 'initial'
  | 'unset'

export type Rounded = boolean | DirectionsBoolean

export type DirectionsBoolean = {
  tl?: boolean
  tr?: boolean
  br?: boolean
  bl?: boolean
}
export type DirectionsSizes = { t?: Sizes; l?: Sizes; r?: Sizes; b?: Sizes }

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type BorderStyles =
  | 'none'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'hidden'

export interface ThemeConfig {
  root?: {
    colors?: {
      [name in Palette]?: string
    }
    spacing?: {
      [name in Sizes | 'auto']?: string
    }
    sizes?: {
      [name in Sizes]?: string
    }
    borderSizes?: {
      [name in Sizes]?: string
    }
    shadows?: {
      [name in Sizes]?: string
    }
  }
  heading?: {
    sizes?: {
      [name in Sizes]?: string
    }
  }
  paragraph?: {
    sizes?: {
      [name in Sizes]?: string
    }
  }
  text?: {
    sizes?: {
      [name in Sizes]?: string
    }
    weights?: {
      [name in Weight]?: string
    }
    styles?: {
      [name in Style]?: string
    }
  }
  box?: {
    rounded?: string
  }
  badge?: {
    rounded?: string
  }
  checkbox?: {
    rounded?: string
  }
}
