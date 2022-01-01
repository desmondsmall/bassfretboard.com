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
        <button onClick={click} className="w-1/2 md:w-full md:ml-2 md:h-14 md:text-xl lg:text-2xl xl:uppercase xl:tracking-widest rounded-md shadow shadow-slate-800 bg-gradient-brand text-gray-900 font-mono">Start</button>
    )
}
