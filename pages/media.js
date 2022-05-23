import { Anchor, Box, Heading, Text } from 'grommet'
import TitleText from '../components/common/TitleText'
import YouTube from '../components/common/YouTube'

export default function Media() {
  return (
    <Box
      alignSelf="center"
      width="large"
      pad={{
        top: "small",
        left: "medium",
        right: "medium",
      }}
    >
      <Box>
        <Heading>Media</Heading>
      </Box>
      <TitleText>Radolescents Back To School Tour 2019-2020</TitleText>
      <Box align="center">
        <YouTube id="0Gh6jZ3TtEo" />
        <YouTube id="pV3i41YGgqs" />
      </Box>
      <TitleText>For$aken Profits Tour 2020</TitleText>
      <Box align="center">
        <YouTube id="uOELS3_sIKc" />
      </Box>
    </Box>
  )
}
