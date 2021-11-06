import React, { useState, useEffect } from 'react'
import { Analyser } from '../components/Analyser'
import { Options } from '../components/Options'

export const Display = ({ userAudio, listening, optionsIsOpen, setOptionsIsOpen }) => {

    const [noteToPlay, setNoteToPlay] = useState()
    const [practiceMode, setPracticeMode] = useState('fretboard')
    console.log("display rendered")

    return (
        <>
            <div className="border-2 border-red-400">

                <div className="border-b-2 border-black my-4 pb-4">
                    welcome to bass trainer<br />
                    play area
                </div>

                <Options
                    setNoteToPlay={setNoteToPlay}
                    practiceMode={practiceMode}
                    setPracticeMode={setPracticeMode}
                    optionsIsOpen={optionsIsOpen}
                />

                {(listening && userAudio) &&
                    <Analyser
                        userAudio={userAudio}
                        listening={listening}
                        noteToPlay={noteToPlay}
                    />
                }
            </div>
        </>
    )
}