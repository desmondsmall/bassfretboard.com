export const SelectPlayMode = ({ playMode, setPlayMode }) => {

    return (
        <>
            <div className="mt-6 mb-4 md:mb-0">
                <label
                    htmlFor="practice-mode"
                    className="block bg-white rounded-l-lg rounded-r-3xl mt-2 py-2 pl-2 pr-6 md:py-3 md:pr-10 absolute border">
                    Select Mode
                </label>
                <select
                    id="practice-mode"
                    onChange={(e) => setPlayMode(e.target.value)}
                    value={playMode}
                    className="w-full my-2 py-2 pr-2 cursor-pointer text-right md:py-3">
                    <option value="fretboard">Fretboard</option>
                    <option value="circle of fifths">Circle of Fifths</option>
                </select>
            </div>
        </>
    )
}