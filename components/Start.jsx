export const Start = ({ userAudio, setUserAudio, setListening, optionsIsOpen }) => {

    const click = async () => {
        if (!userAudio) {

            const microphone = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: false,
                    autoGainControl: false,
                    noiseSuppression: false,
                    latency: 0
                }
            })

            setUserAudio(microphone)
        }

        setListening(true)
    }

    return (
        <>
            {!optionsIsOpen &&
                <button onClick={click} className="w-1/2">start</button>
            }
        </>
    )
}
