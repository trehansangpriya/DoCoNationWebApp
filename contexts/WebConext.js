import React, { useContext, useState } from 'react';
const WebContext = React.createContext()

export function useWebContext() {
    return useContext(WebContext)
}

export function WebProvider({ children }) {
    const [navOpen, setNavOpen] = useState(false)

    const value = {
        navOpen,
        setNavOpen
    }
    return (
        <WebContext.Provider value={value}>
            {children}
        </WebContext.Provider>
    )
}