import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Options = ({ children, optionsIsOpen, title }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {/* Mobile */}
            {(optionsIsOpen && windowSize.width < breakpoints.md) &&
                <>
                    <div className="default-p absolute inset-x-0 inset-y-0 z-10 bg top-2" style={{zIndex:"55"}}>
                        {/* <h1 className="my-8 text-2xl text-center">{title}</h1> */}
                        {children}
                    </div>
                </>
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