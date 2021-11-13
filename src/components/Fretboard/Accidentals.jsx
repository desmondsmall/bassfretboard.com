export const Accidentals = ({ accidentals, setAccidentals }) => {

    const handleClick = (name, value) => {
        let selected = value ? false : true
        setAccidentals(accidentals => ({ ...accidentals, [name]: selected }))
    }

    const sharpSymbol = String.fromCharCode(9839)
    const flatSymbol = String.fromCharCode(9837)

    return (
        <>
            {Object.entries(accidentals).map((accidental, key) =>
                <button
                    key={key}
                    name={accidental[0]}
                    onClick={() => handleClick(accidental[0], accidental[1])}
                    className={`option-button ${accidental[1] ? 'active' : ''}`}>
                    {accidental[0] == "sharp" ? sharpSymbol : flatSymbol}
                </button>
            )}
        </>
    )
}