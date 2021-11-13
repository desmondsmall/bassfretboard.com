import { useWindowSize } from "../hooks/useWindowSize"
import { useBreakpointContext } from "../context/BreakpointContext"

export const Fieldset = ({ children, name }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {/* Mobile */}
            {(windowSize.width < breakpoints.md) &&
                <fieldset className="border border-opacity-90 bg-gray-100 rounded-2xl mb-5 default-p">
                    <legend className="text-lg bg-white px-4 py-1 rounded-2xl border -ml-5">{name}</legend>
                    {children}
                </fieldset>
            }
            {/* Desktop */}
            {(windowSize.width >= breakpoints.md) &&
                <div className="w-full mr-4 fieldset-container-margin-fix">
                    <fieldset className="flex border justify-center text-center px-6 py-3">
                        <legend className="mb-2 md:mb-3">{name}</legend>
                        {children}
                    </fieldset>
                </div>
            }
        </>
    )
}