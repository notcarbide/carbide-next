import { Anchor, Box, Heading, Text } from 'grommet'
import YouTube from '../components/common/YouTube'
import Iframe from '../components/common/Iframe'

export default function About() {
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
      <Text margin="medium">Radolescents Back To School Tour 2019-2020</Text>
      <Box align="center">
        <YouTube id="0Gh6jZ3TtEo" />
        <YouTube id="pV3i41YGgqs" />
      </Box>
      <Text margin="medium">For$aken Profits Tour 2020</Text>
      <Box align="center">
        <YouTube id="uOELS3_sIKc" />
      </Box>
    </Box>
  )
}
