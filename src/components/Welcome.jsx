import { MobileControls } from './MobileControls'
import { SelectPlayMode } from './SelectPlayMode'
import { useBreakpointContext } from '../context/BreakpointContext'
import { useWindowSize } from '../hooks/useWindowSize'

export const Welcome = ({ setPlayMode, playMode, start, optionsIsOpen, setOptionsIsOpen }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()


    const renderDescription = () => {
        switch (playMode) {
            case 'fretboard':
                return "Play random notes across the fretboard. Choose which strings and frets to focus on, and toggle between flats and sharps or both."
            case 'circle of fifths':
                return "Play around the circle of fifths. Start on C or a random note and go either direction to play fourths or fifths. Try with or without the diagram."
        }
    }

    console.log("welcome rendered")

    return (
        <>
            <div className="
            default-p min-h-screen flex flex-col justify-center mx-auto -mt-4
            md:-mt-12 md:w-3/4
            lg:w-3/5
            xl:w-1/2
            2xl:w-2/5
            ">
                <h1 className="text-3xl text-black mb-5 w-full">Bass Trainer</h1>

                <p className="md:text-xl">
                    <em>Practice by playing along.</em> Plug your bass into an audio interface or put a microphone near your amp.
                    Select a practice mode and press start!
                </p>

                <SelectPlayMode playMode={playMode} setPlayMode={setPlayMode} />

                <>
                    <div className="md:hidden">
                        <h2 className="capitalize mb-2">{playMode}</h2>
                        <p className="w-full mb-4">
                            {renderDescription()}
                        </p>
                    </div>
                </>

                <div className="hidden md:block">{start}</div>

            </div>

            <MobileControls start={start} optionsIsOpen={optionsIsOpen} setOptionsIsOpen={setOptionsIsOpen} />
        </>
    )
}