import React, { useState, useEffect } from 'react'
import Pitchfinder from 'pitchfinder'
import { pitchToNote } from '../functions'
import useInterval from '../hooks/useInterval'

export const Analyser = ({ userAudio, listening, isCorrect, noteToPlay }) => {

    const [notePlaying, setNotePlaying] = useState()
    const [context] = useState(new (window.AudioContext || window.webkitAudioContext)())
    const [stream] = useState(context.createMediaStreamSource(userAudio))
    const [analyser] = useState(context.createAnalyser())

    const detectPitch = Pitchfinder.AMDF({
        sampleRate: context.sampleRate,
        minFrequency: 28,
        maxFrequency: 600,
        sensitivity: 0.05
    });

    stream.connect(analyser)

    useInterval(() => {
        let array32 = new Float32Array(analyser.fftSize)
        analyser.getFloatTimeDomainData(array32)

        setNotePlaying(pitchToNote(detectPitch(array32)))
        if (notePlaying) {
            isCorrect(noteToPlay, notePlaying)
        }
    }, listening === true ? 600 : null)

    useEffect(() => {
        if (notePlaying != null) {
            console.log(notePlaying)
        }
    })

    return (
        <>
            {notePlaying &&
                <h1 className="absolute bottom-0 right-0 m-2 border-1 font-mono font-bold text-2xl">{notePlaying.note}</h1>
            }
            {!notePlaying &&
                < h1 className="absolute bottom-0 right-0 m-2 border-1 font-mono font-bold text-2xl">...</h1>
            }
        </>
    )
}