import { Box, Button, Layer, SideBar,
         Text } from 'grommet'

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
            color: "dark-6",
            size: "1px",
            side: "bottom"
          }}
        >
          <Text color="brand">{label}</Text>
        </Box>
      </Button>
    </Box>
  )
}

const NavBarMenu = ({ setShowMenu }) => {
  return (
    <Layer
      full="vertical"
      position="start"
      background="light-3"
      responsive={false}
      onClickOutside={() => setShowMenu(false)}
    >
      <MenuButton label="Home" href="/" />
      <MenuButton label="About" />
    </Layer>
  )
}

export default NavBarMenu;
