import { Box, Button, Layer, Text } from 'grommet'
import { Close } from 'grommet-icons'
import { useHeaderContext } from '../../context/header'
import Bandcamp from '../common/Bandcamp'

const MusicLayer = () => {
  const header = useHeaderContext()

  return (
    <Box>
      {header.state.showmusic && (
        <Layer
          onEsc={() => header.setShowMusic(false)}
          position="bottom"
          responsive={false}
          modal={false}
        >
          <Box
            direction="row"
            alignSelf="center"
            width="large"
          >
            <Button
              icon={<Close color="brand" />}
              onClick={() => header.setShowMusic(false)}
            />
            <Bandcamp
              id="2524029209"
              album="homers-wrecking-crew"
            />
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default MusicLayer;
