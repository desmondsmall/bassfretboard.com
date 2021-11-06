import React, { useState, useEffect } from 'react'
import { Analyser } from '../components/Analyser'
import { Options } from '../components/Options'

export const Display = ({ userAudio, listening }) => {

    const [noteToPlay, setNoteToPlay] = useState()
    const [practiceMode, setPracticeMode] = useState('fretboard')

    console.log("display rendered")

    return (
        <>
            <Options
                setNoteToPlay={setNoteToPlay}
                practiceMode={practiceMode}
                setPracticeMode={setPracticeMode}
            />


            <Analyser
                userAudio={userAudio}
                listening={listening}
                noteToPlay={noteToPlay}
            />

            <div className="absolute bottom-0 left-0 m-2"><h1>Practice Mode: <span className="font-bold capitalize">{practiceMode}</span></h1></div>
        </>
    )
}