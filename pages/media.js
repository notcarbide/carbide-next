import { Box, Heading, Tab, Tabs } from 'grommet'
import Music from '../components/media/Music'
import Videos from '../components/media/Videos'

export default function Media() {
  return (
    <Box
      alignSelf="center"
      width="large"
      pad={{
        top: "small",
        left: "medium",
        right: "medium",
        bottom: "medium",
      }}
    >
      <Box>
        <Heading>Media</Heading>
      </Box>
      <Tabs>
        <Tab title="Videos">
          <Videos />
        </Tab>
        <Tab title="Music">
          <Music />
        </Tab>
      </Tabs>
    </Box>
  )
}
