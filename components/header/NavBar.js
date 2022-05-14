import { useState } from 'react'
import { Button, Header } from 'grommet'
import { Menu } from 'grommet-icons'
import NavBarMenu from './NavBarMenu'

const NavBar = () => {
  const [showmenu, setShowMenu] = useState(false)

  return (
    <Header
      background="brand"
      height="60px"
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
