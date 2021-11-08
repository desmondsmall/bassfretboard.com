import React, { useState } from 'react'
import { Options } from './Options/Options'
import { Play } from './Play/Play'
import { Analyser } from './Analyser'
import { Stop } from './Stop'
import { Start } from './Start'
import { MobileControls } from './MobileControls'

export const Display = ({ userAudio, setUserAudio, listening, setListening }) => {

    const [playMode, setPlayMode] = useState('fretboard')
    const [noteToPlay, setNoteToPlay] = useState()
    const [optionsIsOpen, setOptionsIsOpen] = useState()

    const start = <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />
    const stop = <Stop setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} />

    console.log("display rendered")

    return (
        <>

            {!listening &&
                <>
                    <div className="border-b-2 border-black my-4 pb-4">
                        welcome to bass trainer
                    </div>

                    <Options
                        listening={listening}
                        setNoteToPlay={setNoteToPlay}
                        playMode={playMode}
                        setPlayMode={setPlayMode}
                        optionsIsOpen={optionsIsOpen}
                        start={start}
                    />

                    <MobileControls
                        start={start}
                        setOptionsIsOpen={setOptionsIsOpen}
                    />
                </>
            }

            {listening &&
                <>
                    <Play noteToPlay={noteToPlay} playMode={playMode} stop={stop}/>
                    <Analyser
                        userAudio={userAudio}
                        listening={listening}
                        noteToPlay={noteToPlay}
                    />
                </>
            }

        </>
    )
}