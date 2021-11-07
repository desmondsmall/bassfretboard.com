export const ToggleOptions = ({ setOptionsIsOpen, optionsIsOpen }) => {

    return (
        <>
            {!optionsIsOpen
                ? <button onClick={() => setOptionsIsOpen(true)} className="md:hidden w-1/2 ml-1">options</button>
                : <button onClick={() => setOptionsIsOpen()} className="md:hidden w-full z-20">save & return</button>
            }
        </>
    )
}