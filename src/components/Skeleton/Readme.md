```jsx
import { Box } from 'components'
;<Box wrap="wrap" justifyContent="space-around" basis="small">
  <Box width="small" direction="column">
    <Skeleton height="xsmall" />
    <Skeleton animate style={{ height: '1rem' }} margin={{ t: 'xsmall' }} />
    <Skeleton
      animate
      style={{ height: '1rem' }}
      margin={{ t: 'xsmall' }}
      width="1/3"
    />
  </Box>

  <Box width="small" direction="column">
    <Skeleton height="xsmall" />
    <Skeleton animate style={{ height: '1rem' }} margin={{ t: 'xsmall' }} />
    <Skeleton
      animate
      style={{ height: '1rem' }}
      margin={{ t: 'xsmall' }}
      width="1/3"
    />
  </Box>

  <Box width="small" direction="column">
    <Skeleton height="xsmall" />
    <Skeleton animate style={{ height: '1rem' }} margin={{ t: 'xsmall' }} />
    <Skeleton
      animate
      style={{ height: '1rem' }}
      margin={{ t: 'xsmall' }}
      width="1/3"
    />
  </Box>
</Box>
```
