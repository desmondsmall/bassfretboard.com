export const StartingNote = ({ startingNote, setStartingNote }) => {
    return (
        <>
            <button
                onClick={() => setStartingNote('c')}
                className={`option-button ${startingNote === 'c' ? 'active' : ''}`}>
                C
            </button>
            <button
                onClick={() => setStartingNote('random')}
                className={`option-button ${startingNote === 'random' ? 'active' : ''}`}>
                Random
            </button>
        </>
    )
}