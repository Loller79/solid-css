import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Flex: Style<FlexStyle> = {
  acfs: {
    alignContent: 'flex-start'
  },
  acfe: {
    alignContent: 'flex-end'
  },
  acc: {
    alignContent: 'center'
  },
  acs: {
    alignContent: 'stretch'
  },
  acsb: {
    alignContent: 'space-between'
  },
  acsa: {
    alignContent: 'space-around'
  },
  aifs: {
    alignItems: 'flex-start'
  },
  aife: {
    alignItems: 'flex-end'
  },
  aic: {
    alignItems: 'center'
  },
  ais: {
    alignItems: 'stretch'
  },
  aib: {
    alignItems: 'baseline'
  },
  asa: {
    alignSelf: 'auto'
  },
  asfs: {
    alignSelf: 'flex-start'
  },
  asfe: {
    alignSelf: 'flex-end'
  },
  asc: {
    alignSelf: 'center'
  },
  ass: {
    alignSelf: 'stretch'
  },
  asb: {
    alignSelf: 'baseline'
  },
  di: {
    direction: 'inherit'
  },
  dltr: {
    direction: 'ltr'
  },
  drtl: {
    direction: 'rtl'
  },
  f: {
    flex: 0
  },
  fb: {
    flexBasis: 0
  },
  fbp: {
    flexBasis: '%'
  },
  fdr: {
    flexDirection: 'row'
  },
  fdc: {
    flexDirection: 'column'
  },
  fdrr: {
    flexDirection: 'row-reverse'
  },
  fdcr: {
    flexDirection: 'column-reverse'
  },
  fg: {
    flexGrow: 0
  },
  fsh: {
    flexShrink: 0
  },
  fww: {
    flexWrap: 'wrap'
  },
  fwnw: {
    flexWrap: 'nowrap'
  },
  fwwr: {
    flexWrap: 'wrap-reverse'
  },
  jcfs: {
    justifyContent: 'flex-start'
  },
  jcfe: {
    justifyContent: 'flex-end'
  },
  jcc: {
    justifyContent: 'center'
  },
  jcsb: {
    justifyContent: 'space-between'
  },
  jcsa: {
    justifyContent: 'space-around'
  },
  jcse: {
    justifyContent: 'space-evenly'
  }
}

export default Flex
