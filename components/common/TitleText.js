import { Text } from 'grommet'

const TitleText = ({ children }) => {
  return (
    <Text
      weight="bold"
      margin={{
        bottom: "xsmall",
        top: "xsmall",
      }}
    >
      {children}
    </Text>
  )
}

export default TitleText
