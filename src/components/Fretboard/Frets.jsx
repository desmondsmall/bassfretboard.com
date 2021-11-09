export const Frets = ({ frets, setFrets }) => {

    const handleClick = (e, name) => {
        let fret = Number(e.target.value)
        if (
            (name === "min" && fret < frets.max) ||
            (name === "max" && fret > frets.min)
        ) {
            setFrets(frets => ({ ...frets, [name]: fret }))
        }
    }

    return (
        <>
            {Object.entries(frets).map((fret, key) =>
                <input
                    key={key}
                    type="number"
                    pattern="\d*"
                    min="1" max="18"
                    value={fret[1]}
                    name={fret[0]}
                    onChange={(e) => handleClick(e, fret[0])} 
                    className="active text-center" />

            )}
        </>
    )
}