import { useEffect } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { useBreakpointContext } from '../context/BreakpointContext'

export const MobileControls = ({ start, optionsIsOpen, setOptionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {(windowSize.width < breakpoints.md) &&
                <div className="fixed bottom-0 inset-x-0 flex default-p z-20 bg-white">
                    {start}
                    <button
                        onClick={() => setOptionsIsOpen(state => !state)}
                        className="md:hidden w-1/2 ml-1">
                        {optionsIsOpen ? "go back" : "options"}
                    </button>
                </div>
            }
        </>
    )
}