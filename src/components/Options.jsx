import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'
import { SelectPlayMode } from './SelectPlayMode'

export const Options = ({ children, optionsIsOpen, start, title, playMode, setPlayMode }) => {

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
                    <div className="hidden top-0 w-80">
                        <SelectPlayMode playMode={playMode} setPlayMode={setPlayMode} />
                    </div>
                    <div className="px-4 py-5 absolute bottom-0 inset-x-0 flex lg:py-6 lg:px-10 mx-auto bg-gray-100">
                        {children}
                    </div>
                </>
            }
        </>
    )
}