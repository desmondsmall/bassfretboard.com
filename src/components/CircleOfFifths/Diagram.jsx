export const Diagram = ({ diagram, setDiagram }) => {
    return (
        <>
            <button
                onClick={() => setDiagram(true)}
                className={` ${diagram ? 'active' : ''}`}>
                On
            </button>
            <button
                onClick={() => setDiagram()}
                className={` ${!diagram ? 'active' : ''}`}>
                Off
            </button>
        </>
    )
}