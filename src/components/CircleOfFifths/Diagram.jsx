export const Diagram = ({ diagram, setDiagram }) => {
    return (
        <>
            <button
                onClick={() => setDiagram(true)}
                className={`option-button ${diagram ? 'active' : ''}`}>
                On
            </button>
            <button
                onClick={() => setDiagram()}
                className={`option-button ${!diagram ? 'active' : ''}`}>
                Off
            </button>
        </>
    )
}