import { ToggleOptions } from "./ToggleOptions"
import { useWindowSize } from '../src/hooks/useWindowSize'
import { useBreakpointContext } from "../src/context/BreakpointContext"

export const MobileControls = ({ start, optionsIsOpen, setOptionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoint = useBreakpointContext()
    
    return (
        <>
            {(windowSize.width < breakpoint.md) &&
                <div className="absolute bottom-0 bg-red-100 w-full flex p-1">
                    {start}
                    < ToggleOptions optionsIsOpen={optionsIsOpen} setOptionsIsOpen={setOptionsIsOpen} />
                </div>
            }
        </>
    )
}