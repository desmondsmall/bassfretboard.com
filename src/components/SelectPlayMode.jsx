export const SelectPlayMode = ({ playMode, setPlayMode }) => {

    const renderDescription = () => {
        switch (playMode) {
            case 'fretboard':
                return "Play random notes across the fretboard. Choose which strings and frets to focus on, and toggle between flats and sharps or both."
            case 'circle of fifths':
                return "Play around the circle of fifths. Start on C or a random note and go either direction to play fourths or fifths. Try with or without the diagram."
        }
    }

    return (
        <>
            <div className="my-6">
                <div className="mb-6">
                    <label
                        for="practice-mode"
                        className="block bg-white rounded-l-lg rounded-r-3xl mt-2 py-3 pl-2 pr-6 absolute border">
                        Select Mode
                    </label>
                    <select
                        id="practice-mode"
                        onChange={(e) => setPlayMode(e.target.value)}
                        value={playMode}
                        className="w-full my-2 py-3 pr-2 cursor-pointer text-right">
                        <option value="fretboard">Fretboard</option>
                        <option value="circle of fifths">Circle of Fifths</option>
                    </select>
                </div>

                <>
                    <h2 className="capitalize mb-2">{playMode}</h2>
                    <p className="w-full mb-4">
                        {renderDescription()}
                    </p>
                </>
            </div>
        </>
    )
}