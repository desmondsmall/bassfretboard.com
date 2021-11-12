import { MobileControls } from './MobileControls'
import { SelectPlayMode } from './SelectPlayMode'

export const Welcome = ({ setPlayMode, playMode, start, optionsIsOpen, setOptionsIsOpen }) => {

    console.log("welcome rendered")

    return (
        <>
            <div className="default-p min-h-screen flex flex-col justify-center">
                <h1 className="text-3xl text-black mb-5">Bass Trainer</h1>

                <p className="">
                    <em>Practice by playing along.</em> Plug your bass into an audio interface or put a microphone near your amp.
                    Select a practice mode and press start!
                </p>

                <SelectPlayMode playMode={playMode} setPlayMode={setPlayMode} />

            </div>

            <MobileControls start={start} optionsIsOpen={optionsIsOpen} setOptionsIsOpen={setOptionsIsOpen} />
        </>
    )
}