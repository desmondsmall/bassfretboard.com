import { useWindowSize } from '../hooks/useWindowSize'
import { useBreakpointContext } from '../context/BreakpointContext'

export const MobileControls = ({ start, optionsIsOpen, setOptionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    return (
        <>
            {(windowSize.width < breakpoints.md) &&
                <div className="fixed bottom-2 inset-x-3 flex h-11 mb-2" style={{zIndex: "1000"}}>
                    {start}
                    <button
                        onClick={() => setOptionsIsOpen(state => !state)}
                        className={`border border-gray-600 shadow shadow-slate-800 bg md:hidden w-1/2 ml-4 text-white font-mono rounded-md`}>
                        {optionsIsOpen ? "Go back" : "Options"}
                    </button>
                </div>
            }
        </>
    )
}