import React, { useState, useEffect } from 'react'
import Pitchfinder from 'pitchfinder'
import { pitchToNote } from '../functions'
import useInterval from '../hooks/useInterval'

export const Analyser = ({ userAudio, listening, isCorrect, noteToPlay, format }) => {

    const [notePlaying, setNotePlaying] = useState()
    const [context] = useState(new (window.AudioContext || window.webkitAudioContext)())
    const [stream] = useState(context.createMediaStreamSource(userAudio))
    const [analyser] = useState(context.createAnalyser())

    const detectPitch = Pitchfinder.AMDF({
        sampleRate: context.sampleRate,
        minFrequency: 30,
        maxFrequency: 530,
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
            //console.log(notePlaying)
        }
    })

    const renderNotePlaying = () => {
        switch (format) {
            case 'both':
                return notePlaying.sharp + '/' + notePlaying.flat
            case 'sharp':
                return notePlaying.sharp
            case 'flat':
                return notePlaying.flat
            default:
                return notePlaying.note
        }
    }

    return (
        <div className="absolute rounded-full mt-52 -ml-40 md:mt-64 md:-ml-72 p-1 w-12 h-12 bg-blue-100 flex items-center justify-center shadow shadow-slate-800">
            <h1 className="md:text-2xl font-mono text-sm text-gray-900">{notePlaying ? renderNotePlaying() : <span className="text-sm tracking-widest">...</span>}</h1>
        </div>
    )
}