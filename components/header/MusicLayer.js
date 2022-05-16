import { Box, Button, Layer, Text } from 'grommet'
import { Close } from 'grommet-icons'

const MusicLayer = ({ setShowMusic }) => {

  return (
    <Layer
      onClickOutside={() => setShowMusic(false)}
      onEsc={() => setShowMusic(false)}
    >
      <Box>
        <Button
          icon={<Close />}
          onClick={() => setShowMusic(false)}
        />
      </Box>
    </Layer>
  )
}

export default MusicLayer;
