import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

const carbide = deepMerge(grommet, {
  anchor: {
      color: '#75b1f2',
  },
  global: {
    colors: {
      brand: '#75b1f2',
    },
  },
  tab: {
    color: "text",
    border: {
      active: {
        color: "brand",
      },
      color: "text",
    },
  },
})

export default carbide;
