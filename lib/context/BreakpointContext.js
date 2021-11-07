import { createContext, useContext } from 'react';

const BreakpointContext = createContext()

export const BreakpointWrapper = ({ children }) => {
    let breakpoints = { md: 768, lg: 1000 }

    return (
        <BreakpointContext.Provider value={breakpoints}>
            {children}
        </BreakpointContext.Provider>
    );
}

export const useBreakpointContext = () => {
    return useContext(BreakpointContext)
}