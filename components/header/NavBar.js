import { useState } from 'react'
import { Button, Header } from 'grommet'
import { Menu } from 'grommet-icons'
import NavBarMenu from './NavBarMenu'

const NavBar = () => {
  const [showmenu, setShowMenu] = useState(false)

  return (
    <Header
      background="dark-1"
      height="60px"
      border={{
        color: "brand",
        side: "bottom",
      }}
    >
      <Button
        a11yTitle="Menu"
        icon={<Menu />}
        onClick={() => setShowMenu(true)}
      />
      {showmenu && (
        <NavBarMenu setShowMenu={setShowMenu} />
      )}
    </Header>
  )
}

export default NavBar;
