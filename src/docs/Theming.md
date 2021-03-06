The theme is responsible for containing global style key values like a colour pallete, and component specific style options like the font sizes of a Heading or Paragraph.

With a theme in place, every component has a common language in how it retrieves it's type and magnitude of styling, aswell as giving the developer a common language when using the available props for each component.

```json
{
  "root": {
    "colors": {
      "brand": "#E8325A",
      "accent-1": "#216CA9",
      "accent-2": "#916364",
      "accent-3": "#6EB785",
      "accent-4": "#745AAA",
      "neutral-1": "#0a4c83",
      "neutral-2": "#5b3132",
      "neutral-3": "#21703a",
      "neutral-4": "#2e1465",
      "error": "#FF4040",
      "warning": "#FFAA15",
      "success": "#00C781",
      "unknown": "#CCCCCC",
      "disabled": "#CCCCCC",
      "light-1": "#F8F8F8",
      "light-2": "#F2F2F2",
      "light-3": "#EDEDED",
      "light-4": "#DADADA",
      "light-5": "#DADADA",
      "light-6": "#DADADA",
      "dark-1": "#333333",
      "dark-2": "#555555",
      "dark-3": "#777777",
      "dark-4": "#999999",
      "dark-5": "#999999",
      "dark-6": "#999999",
      "transparent": "transparent"
    },
    "spacing": {
      "xxsmall": "3px",
      "xsmall": "5px",
      "small": "10px",
      "medium": "20px",
      "large": "40px",
      "xlarge": "60px",
      "xxlarge": "80px",
      "auto": "auto",
      "unset": ""
    },
    "borderSizes": {
      "xxsmall": "1px",
      "xsmall": "2px",
      "small": "3px",
      "medium": "5px",
      "large": "10px",
      "xlarge": "20px",
      "xxlarge": "40px",
      "unset": ""
    },
    "sizes": {
      "xxsmall": "40px",
      "xsmall": "80px",
      "small": "160px",
      "medium": "320px",
      "large": "640px",
      "xlarge": "960px",
      "xxlarge": "1280px",
      "1/2": "50%",
      "1/3": "33.33%",
      "2/3": "66.66%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%",
      "auto": "auto",
      "unset": ""
    },
    "shadows": {
      "xsmall": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "small": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "medium": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "large": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "xlarge": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "unset": ""
    },
    "isAllRounded": false
  },
  "paragraph": {
    "sizes": {
      "xxsmall": "11px",
      "xsmall": "12px",
      "small": "14px",
      "medium": "16px",
      "large": "18px",
      "xlarge": "20px",
      "xxlarge": "24px"
    }
  },
  "text": {
    "sizes": {
      "xxsmall": "xx-small",
      "xsmall": "x-small",
      "small": "small",
      "medium": "medium",
      "large": "large",
      "xlarge": "x-large",
      "xxlarge": "xx-large"
    },
    "weights": {
      "normal": "normal",
      "bold": "bold",
      "bolder": "bolder",
      "lighter": "lighter",
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      "unset": ""
    },
    "styles": {
      "normal": "normal",
      "italic": "italic",
      "oblique": "oblique",
      "inherit": "inherit",
      "initial": "initial",
      "unset": "unset"
    }
  },
  "heading": {
    "sizes": {
      "xxsmall": "3px",
      "xsmall": "5px",
      "small": "10px",
      "medium": "20px",
      "large": "40px",
      "xlarge": "60px",
      "xxlarge": "80px",
      "unset": ""
    }
  },
  "box": {
    "rounded": "24px"
  },
  "button": {
    "rounded": "24px"
  },
  "badge": {
    "rounded": "24px"
  },
  "checkbox": {
    "rounded": "12px"
  },
  "progressBar": {
    "rounded": "24px"
  },
  "input": {
    "rounded": "24px"
  }
}
```

Currently using Porunga, the provided theme wrapper component must be wrapped around the root of a react app for it's styles to function as intended. A default theme is applied when no `theme` prop value is assigned.

```jsx
import Theme from '../components/Theme'
import Heading from '../components/Heading'
;<Theme>
  <Heading color="brand">I'm a brand colour Heading</Heading>
</Theme>
```

When passing a theme object into the provided wrapper, the given theme object will merge with the default theme so that you only need to change exactly what you want.

```jsx
import Theme from '../components/Theme'
import Heading from '../components/Heading'
const customTheme = {
  root: {
    colors: {
      brand: '#FFCA58',
    },
  },
}
;<Theme theme={customTheme}>
  <Heading color="brand">I'm a brand colour Heading</Heading>
</Theme>
```
