export const Stop = ({ setListening, setOptionsIsOpen }) => {

    const stop = () => {
        setListening()
        setOptionsIsOpen()
    }

    return (
        <button onClick={stop} className="">stop</button>
    )
}