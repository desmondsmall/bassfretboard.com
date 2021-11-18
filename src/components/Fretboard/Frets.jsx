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
            <input
                type="number"
                pattern="\d*"
                min="1" max="18"
                value={fretMinMax.min}
                name="min"
                onChange={(e) => handleClick(e, "min")}
                className="active text-center option-button w-14" />
            <input
                type="number"
                pattern="\d*"
                min="1" max="18"
                value={fretMinMax.max}
                name="max"
                onChange={(e) => handleClick(e, "max")}
                className="active text-center option-button w-14" />
        </>
    )
}