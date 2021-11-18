import { createContext, useContext } from 'react';

const BreakpointContext = createContext()

export const BreakpointProvider = ({ children }) => {
    let breakpoints = { sm: 375, md: 768, lg: 1024, xl: 1280 }

    return (
        <BreakpointContext.Provider value={breakpoints}>
            {children}
        </BreakpointContext.Provider>
    );
}

export const useBreakpointContext = () => {
    return useContext(BreakpointContext)
}