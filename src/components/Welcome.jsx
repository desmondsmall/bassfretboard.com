import { MobileControls } from './MobileControls'

export const Welcome = ({ listening, playMode, start, stop, setOptionsIsOpen }) => {
    return (
        <>
            {!listening &&
                <>
                    <div className="border-b-2 border-black my-4 pb-4">
                        welcome to bass trainer
                        BLAH BLAH
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="practice-mode" className="mr-2">Practice Mode:</label>
                        <select
                            id="practice-mode"
                            onChange={(e) => setPlayMode(e.target.value)}
                            value={playMode}
                            className="border py-2 rounded-lg shadow-inner text-sm mr-2">
                            <option value="fretboard">Fretboard</option>
                            <option value="circle of fifths">Circle of Fifths</option>
                        </select>
                    </div>

                    <MobileControls start={start} setOptionsIsOpen={setOptionsIsOpen} />
                </>
            }
        </>
    )
}