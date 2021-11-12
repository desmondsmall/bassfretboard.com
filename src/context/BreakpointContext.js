import { createContext, useContext } from 'react';

const BreakpointContext = createContext()

export const BreakpointProvider = ({ children }) => {
    let breakpoints = { md: 768, sm: 375 }

    return (
        <BreakpointContext.Provider value={breakpoints}>
            {children}
        </BreakpointContext.Provider>
    );
}

export const useBreakpointContext = () => {
    return useContext(BreakpointContext)
}