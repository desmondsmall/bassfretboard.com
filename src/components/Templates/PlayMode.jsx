import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { getNoteToPlay } from '../../functions'

/* 
    Each play mode has its own component that must
        1) display options and maintain its state
        2) generate a note for the user to play: noteToPlay
        3) provide a function to check if that note is correct: isCorrect()
        4) pass noteToPlay and isCorrect() to Analyser
*/

export const CircleOfFifths = ({ userAudio, listening, setListening, optionsIsOpen, start }) => {

    // optional 
    const [optionOne, setOptionOne] = useState("default")
    const [optionTwo, setOptionTwo] = useState("default")

    // required
    const [correct, setCorrect] = useState()
    const [noteToPlay, setNoteToPlay] = useState()

    // get note to play
    useEffect(() => {
        if (listening) {
            setNoteToPlay(getNoteToPlay())
        }
    }, [listening])

    // update when correct
    useEffect(() => {
        if (correct) {
            setNoteToPlay(getCircleOfFifthsNote())
            setCorrect()
        }
    }, [correct])

    // function to pass to Analyser
    const isCorrect = () => {
        return null
    }

    return (
        <>

            {/* Options specific to the mode. Include a start button. I should move start to Options. */}
            {!listening &&
                <Options optionsIsOpen={optionsIsOpen}>
                    {start}
                </Options>
            }

            {/* View specific to the mode. Include a noteToPlay. Include a stop button. I should move stop to Options */}
            {(listening && noteToPlay) &&
                <>
                    <button onClick={() => setListening()}>stop</button>
                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} />
                </>
            }
        </>
    )
}