import React, { useState } from 'react'
import { Analyser } from '../components/Analyser'
import { Options } from '../components/Options'
import { Stop } from '../components/Stop'
import { Start } from "../components/Start"
import { MobileControls } from './MobileControls'

export const Display = ({ userAudio, setUserAudio, listening, setListening }) => {

    const [practiceMode, setPracticeMode] = useState('fretboard')
    const [noteToPlay, setNoteToPlay] = useState()
    const [optionsIsOpen, setOptionsIsOpen] = useState()

    const start = <Start optionsIsOpen={optionsIsOpen} userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />

    console.log("display rendered")

    return (
        <>

            {listening
                ?
                <>
                    play area show me note to play
                    <Stop setListening={setListening} />
                    <Analyser
                        userAudio={userAudio}
                        listening={listening}
                        noteToPlay={noteToPlay}
                    />
                </>
                :
                <>

                    <div className="border-b-2 border-black my-4 pb-4">
                        welcome to bass trainer
                    </div>

                    <Options
                        setNoteToPlay={setNoteToPlay}
                        practiceMode={practiceMode}
                        setPracticeMode={setPracticeMode}
                        optionsIsOpen={optionsIsOpen}
                        start={start}
                    />

                    <MobileControls start={start} setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} />
                </>
            }
        </>
    )
}