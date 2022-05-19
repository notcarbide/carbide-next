import { Box, Button, Layer, SideBar,
         Text } from 'grommet'
import { useHeaderContext } from '../../context/header'

const MenuButton = ({ label, href }) => {
  return (
    <Box>
      <Button
        a11yTitle={label}
        href={href}
      >
        <Box
          height="72px"
          align="center"
          justify="center"
          width="small"
          border={{
            color: "brand",
            size: "1px",
            side: "bottom"
          }}
        >
          <Text>{label}</Text>
        </Box>
      </Button>
    </Box>
  )
}

const NavBarMenu = () => {
  const header = useHeaderContext()

  return (
    <Box>
      {header.state.showmenu && (
        <Layer
          full="vertical"
          position="start"
          background="#000"
          responsive={false}
          onClickOutside={() => header.setShowMenu(false)}
        >
          <MenuButton label="Home" href="/" />
          <MenuButton label="About" href="/about" />
          <MenuButton label="Media" href="/media" />
          <MenuButton label="Shows" href="/shows" />
          <MenuButton label="Contact" href="/contact" />
        </Layer>
      )}
    </Box>
  )
}

export default NavBarMenu;
