import { useEffect } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { useBreakpointContext } from '../context/BreakpointContext'

export const MobileControls = ({ start, setOptionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    useEffect(() => {
        setOptionsIsOpen(false)
    }, [windowSize.width])

    return (
        <>
            {(windowSize.width < breakpoints.md) &&
                <div className="absolute bottom-0 bg-red-100 w-full flex p-1 z-20">
                    {start}
                    <button onClick={() => setOptionsIsOpen(state => !state)} className="md:hidden w-1/2 ml-1">options</button>
                </div>
            }
        </>
    )
}