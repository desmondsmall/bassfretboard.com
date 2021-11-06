export const Stop = ({ setListening }) => {

    const stop = () => {
        setListening()
    }

    return (
        <button onClick={stop}> stop</button >
    )
}