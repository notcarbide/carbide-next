import { useState } from 'react'
import { Button, Header } from 'grommet'
import { Menu, Music } from 'grommet-icons'
import MusicLayer from './MusicLayer'
import NavBarMenu from './NavBarMenu'
import LogoIcon from '../../assets/LogoIcon'

const NavBar = () => {
  const [showmenu, setShowMenu] = useState(false)
  const [showmusic, setShowMusic] = useState(false)

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
      <LogoIcon size="large" />
      {!showmenu && (
        <Button
          a11yTitle="Open Music Players"
          icon={<Music />}
          onClick={() => setShowMusic(true)}
        />
      )}
      {showmenu && (
        <NavBarMenu setShowMenu={setShowMenu} />
      )}
      {showmusic && (
        <MusicLayer setShowMusic={setShowMusic} />
      )}
    </Header>
  )
}

export default NavBar;
