import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Options = ({ children, optionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {/* Mobile */}
            {(optionsIsOpen && windowSize.width < breakpoints.md) &&
                <div className="absolute top-0 left-0 right-0 mt-2 z-30 bg min-h-screen pb-24">
                    <div className="default-p">
                        {children}
                    </div>
                </div>
            }

            {/* Desktop */}
            {(windowSize.width >= breakpoints.md) &&
                <>
                    <div
                        className="bg default-p absolute bottom-0 w-full flex">
                        {children}
                    </div>
                </>
            }
        </>
    )
}