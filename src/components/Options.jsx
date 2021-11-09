import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Options = ({ children, optionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {(optionsIsOpen || windowSize.width >= breakpoints.md) &&
                <>
                    <div className={
                /* global */ `bg-blue-100 
                ${windowSize.width < breakpoints.md
                /* mobile */ ? 'absolute inset-x-0 inset-y-0 z-10 bg-green-100'
                /* dsktop */ : ''}`}
                    >
                        "OPTIONS"

                        {children}
                    </div>
                </>
            }
        </>
    )
}