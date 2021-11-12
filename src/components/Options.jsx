import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Options = ({ children, optionsIsOpen, start }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {/* Mobile */}
            {(optionsIsOpen && windowSize.width < breakpoints.md) &&
                <div className="default-p absolute inset-x-0 inset-y-0 z-10 bg-white">
                    {children}
                </div>
            }

            {/* Desktop */}
            {(windowSize.width >= breakpoints.md) &&
                <div className="default-p absolute bottom-0 inset-x-0">
                    {children}
                    {start}
                </div>
            }
        </>
    )
}