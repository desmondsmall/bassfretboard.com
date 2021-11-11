import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Direction } from './Direction'
import { StartingNote } from './StartingNote'
import { Fieldset } from '../Fieldset'

export const CircleOfFifths = ({ userAudio, listening, setListening, optionsIsOpen, start }) => {

    const [direction, setDirection] = useState("fourths")
    const [startingNote, setStartingNote] = useState("c")
    const [correct, setCorrect] = useState()
    const [noteToPlay, setNoteToPlay] = useState()
    const [format, setFormat] = useState()

    const [fourths, setFourths] = useState(['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G'])
    const [fifths, setFifths] = useState(['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'])

    console.log("circle of fifths render")

    const getCircleOfFifthsNote = (direction, startingNote) => {
        if (startingNote === "c" && direction === "fourths") {
            return fourths[0]
        }
    }

    useEffect(() => {
        if (listening) {
            direction === "fourths" ? setFormat("flat") : setFormat("sharp")
            setNoteToPlay(getCircleOfFifthsNote(direction, startingNote))
        }
    }, [listening])

    useEffect(() => {
        if (correct) {
            if (direction === "fourths") {
                const newArray = [...fourths]
                const oldNote = newArray.shift()
                newArray.push(oldNote)
                setFourths(newArray)
                setNoteToPlay(fourths[0])
            }
            setCorrect()
        }
    }, [correct])

    const isCorrect = (noteToPlay, notePlaying) => {
        if (noteToPlay === notePlaying.flat) {
            setCorrect(true)
            console.log("correct")
        }
    }
    const stop = () => {
        setListening()
        setFourths(['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G'])
        setFifths(['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'])
    }

    return (
        <>
            {!listening &&
                <Options optionsIsOpen={optionsIsOpen}>
                    <Fieldset name="Direction">
                        <Direction direction={direction} setDirection={setDirection} />
                    </Fieldset>

                    <Fieldset name="Starting Note">
                        <StartingNote startingNote={startingNote} setStartingNote={setStartingNote} />
                    </Fieldset>
                    {start}
                </Options>
            }

            {(listening && noteToPlay) &&
                <>
                    {noteToPlay}

                    <button onClick={stop}>stop</button>
                    <Analyser
                        userAudio={userAudio}
                        listening={listening}
                        isCorrect={isCorrect}
                        noteToPlay={noteToPlay}
                        format={format}
                    />
                </>
            }
        </>
    )
}