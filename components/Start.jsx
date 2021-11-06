export const Start = ({ userAudio, setUserAudio, setListening }) => {

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
        <button onClick={click} className="">start</button>
    )
}
