export const Frets = ({ fretMinMax, setFretMinMax }) => {

    const handleClick = (e, thisFret) => {
        let value = Number(e.target.value)
        let frets = [...fretMinMax]

        if (thisFret === "min" && value < fretMinMax[1]) {
            frets[0] = value
            setFretMinMax(frets)
        }
        else if (thisFret === "max" && value > fretMinMax[0]) {
            frets[1] = value
            setFretMinMax(frets)
        }
    }

    return (
        <>
            <input
                type="number"
                pattern="\d*"
                min="1" max="18"
                value={fretMinMax[0]}
                name="min"
                onChange={(e) => handleClick(e, "min")}
                className="active text-center"
            />
            <input
                type="number"
                pattern="\d*"
                min="1" max="18"
                value={fretMinMax[1]}
                name="max"
                onChange={(e) => handleClick(e, "max")}
                className="active text-center"
            />
        </>
    )
}