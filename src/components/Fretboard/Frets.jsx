export const Frets = ({ fretMinMax, setFretMinMax }) => {

    const handleClick = (e, name) => {
        let fret = Number(e.target.value)
        let separator = 1
        if (
            (name === "min" && (fret + separator) < fretMinMax.max) ||
            (name === "max" && (fret - separator) > fretMinMax.min)
        ) {
            setFretMinMax(fretMinMax => ({ ...fretMinMax, [name]: fret }))
        }
    }

    return (
        <>
            {Object.entries(fretMinMax).map((fret, key) =>
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