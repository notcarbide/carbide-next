import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

const carbide = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#75b1f2',
    },
  },
})

export default carbide;
