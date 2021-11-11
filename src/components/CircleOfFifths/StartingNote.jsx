export const StartingNote = ({ startingNote, setStartingNote }) => {
    return (
        <>
            <button
                onClick={() => setStartingNote('c')}
                className={` ${startingNote === 'c' ? 'active' : ''}`}>
                C
            </button>
            <button
                onClick={() => setStartingNote('random')}
                className={` ${startingNote === 'random' ? 'active' : ''}`}>
                Random
            </button>
        </>
    )
}