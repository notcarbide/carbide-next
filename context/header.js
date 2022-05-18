import { createContext, useContext, useState } from 'react'

const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
  const [showmenu, setShowMenu] = useState(false)
  const [showmusic, setShowMusic] = useState(false)

  return (
    <HeaderContext.Provider
      value={{
        state: {
          showmenu,
          showmusic,
        },
        setShowMenu,
        setShowMusic,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = () => {
  return useContext(HeaderContext)
}
