import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Options = ({ children, optionsIsOpen, start }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {(optionsIsOpen && windowSize.width < breakpoints.md) &&
                <div className="absolute inset-x-0 inset-y-0 z-10 bg-blue-100">
                    {children}
                </div>
            }
            {(windowSize.width >= breakpoints.md) &&
                <div className="bg-blue-100">
                    {children}
                    {start}
                </div>
            }
        </>
    )
}