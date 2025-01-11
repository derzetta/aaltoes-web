import { createContext, useContext, useRef } from 'react'

const FooterScrollContext = createContext<{
  scrollPosition: React.MutableRefObject<number>
}>({
  scrollPosition: { current: 0 }
})

export function FooterScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollPosition = useRef(0)
  
  return (
    <FooterScrollContext.Provider value={{ scrollPosition }}>
      {children}
    </FooterScrollContext.Provider>
  )
}

export const useFooterScroll = () => useContext(FooterScrollContext) 