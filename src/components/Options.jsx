import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Options = ({ children, optionsIsOpen, start, title }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {/* Mobile */}
            {(optionsIsOpen && windowSize.width < breakpoints.md) &&
                <>
                    <div className="default-p absolute inset-x-0 inset-y-0 z-10 bg-white">
                        <h1 className="my-8 text-xl text-center">{title}</h1>
                        {children}
                    </div>

                    {/* Spacing so mobile menu won't cut off options */}
                    <div style={{ height: '125px' }}>&nbsp;</div>
                </>
            }

            {/* Desktop */}
            {(windowSize.width >= breakpoints.md) &&
                <>
                    <div className="px-4 py-5 absolute bottom-0 inset-x-0 flex lg:w-5/6 mx-auto bg-gray-100">
                        {children}
                    </div>
                </>
            }
        </>
    )
}