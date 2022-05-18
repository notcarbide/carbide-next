import { Box, Button, Layer, Text } from 'grommet'
import { Close } from 'grommet-icons'
import { useHeaderContext } from '../../context/header'

const MusicLayer = () => {
  const header = useHeaderContext()

  return (
    <Box>
      {header.state.showmusic && (
        <Layer
          onClickOutside={() => header.setShowMusic(false)}
          onEsc={() => header.setShowMusic(false)}
        >
          <Box>
            <Button
              icon={<Close />}
              onClick={() => header.setShowMusic(false)}
            />
          </Box>
        </Layer>
      )}
    </Box>
  )
}

export default MusicLayer;
