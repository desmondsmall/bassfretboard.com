import React, { useState, useEffect } from 'react'
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { getCircleOfFifthsNote } from '../../functions'

export const CircleOfFifths = ({ userAudio, listening, setListening, optionsIsOpen, start }) => {

    const [direction, setDirection] = useState("4ths")
    const [startingNote, setStartingNote] = useState("c")
    const [diagram, setDiagram] = useState()
    const [correct, setCorrect] = useState()
    const [noteToPlay, setNoteToPlay] = useState()

    useEffect(() => {
        if (listening) {
            setNoteToPlay(getCircleOfFifthsNote())
        }
    }, [listening])

    const isCorrect = () => {
        return null
    }

    return (
        <>
            {!listening &&
                <Options optionsIsOpen={optionsIsOpen}>
                    <div className="">
                        options
                    </div>
                    {start}
                </Options>
            }

            {(listening && noteToPlay) &&
                <>
                    play something

                    <button onClick={() => setListening()}>stop</button>
                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} />
                </>
            }
        </>
    )
}