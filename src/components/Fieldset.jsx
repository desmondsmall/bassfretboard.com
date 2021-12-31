import { useWindowSize } from "../hooks/useWindowSize"
import { useBreakpointContext } from "../context/BreakpointContext"

export const Fieldset = ({ children, name }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {/* Mobile */}
            {(windowSize.width < breakpoints.md) &&
                <div className="mt-6">
                    <div className="">
                        <h2 className="text-2xl font-mono text-white">{name}</h2>
                        {children}
                    </div>
                </div>
            }

            {/* Desktop */}
            {((windowSize.width >= breakpoints.md)) &&
                <div className="w-full mr-4 fieldset-container-margin-fix">
                    <fieldset className="flex justify-center text-center px-6 py-3">
                        <legend className="mb-2 md:mb-0 w-full md:text-xl lg:text-2xl font-thin font-mono">{name}</legend>
                        {children}
                    </fieldset>
                </div>
            }
        </>
    )
}