export const ShowNextNote = ({ showNextNote, setShowNextNote }) => {
    return (
        <>
            <button
                onClick={() => setShowNextNote(true)}
                className={`option-button ${showNextNote ? 'active' : ''}`}>
                On
            </button>
            <button
                onClick={() => setShowNextNote()}
                className={`option-button ${!showNextNote ? 'active' : ''}`}>
                Off
            </button>
        </>
    )
}