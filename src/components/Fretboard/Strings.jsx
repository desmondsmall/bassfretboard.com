export const Strings = ({ strings, setStrings }) => {

    const handleClick = (name) => {

        const newStrings = [...strings]
        for (const string of newStrings) {
            if (string.name === name) {
                string.selected ? string.selected = false : string.selected = true
                break
            }
        }

        setStrings(newStrings)
    }

    return (
        <>
            {strings.map((string, key) =>
                <button
                    key={key}
                    onClick={() => handleClick(string.name)}
                    className={`option-button ${string.selected ? 'active' : ''}`}>
                    {string.name}
                </button>

            )}
        </>
    )
}