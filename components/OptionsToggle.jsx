export const OptionsToggle = ({ setOptionsIsOpen, optionsIsOpen }) => {

    return (
        <>
            {!optionsIsOpen
                ? <button onClick={() => setOptionsIsOpen(true)} className="md:hidden">options</button>
                : <button onClick={() => setOptionsIsOpen()} className="md:hidden absolute">go back</button>
            }
        </>
    )
}