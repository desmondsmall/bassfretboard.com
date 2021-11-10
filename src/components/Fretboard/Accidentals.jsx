export const Accidentals = ({ accidentals, setAccidentals }) => {

    const handleClick = (name) => {
        if ((name === "sharp" && accidentals.flat) || (name === "flat" && accidentals.sharp)) {
            setAccidentals(accidentals => ({ ...accidentals, [name]: !accidentals[name] }))
        }
    }
    const sharpSymbol = String.fromCharCode(9839)
    const flatSymbol = String.fromCharCode(9837)

    return (
        <>
            <button
                name="sharp"
                onClick={() => handleClick("sharp")}
                className={` ${accidentals.sharp ? 'active' : ''}`}>
                {sharpSymbol}
            </button>
            <button
                name="flat"
                onClick={() => handleClick("flat")}
                className={` ${accidentals.flat ? 'active' : ''}`}>
                {flatSymbol}
            </button>
        </>
    )
}