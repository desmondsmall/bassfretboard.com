import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Direction } from './Direction'
import { StartingNote } from './StartingNote'
import { Fieldset } from '../Fieldset'
import { Diagram } from './Diagram'
import { randomIntFromInterval } from '../../functions'

export const CircleOfFifths = ({ userAudio, listening, setListening, optionsIsOpen, start, playMode, setPlayMode }) => {

    const fourthsDefault = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G']
    const fifthsDefault = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F']

    const [direction, setDirection] = useState("fourths")
    const [startingNote, setStartingNote] = useState("c")
    const [diagram, setDiagram] = useState(true)
    const [correct, setCorrect] = useState()
    const [noteToPlay, setNoteToPlay] = useState()
    const [format, setFormat] = useState("flat")

    const [fourths, setFourths] = useState(fourthsDefault)
    const [fifths, setFifths] = useState(fifthsDefault)

    // Sets NoteToPlay when random startingNote is selected
    // Otherwise fourths and fifths useEffect hooks handle it
    useEffect(() => {
        if (listening && startingNote === "random") {
            let array = direction === "fourths" ? [...fourths] : [...fifths]

            // get an int to correspond to the array index
            let startingPosition = randomIntFromInterval(1, 11)

            // rearrange the array
            let newArray = [...array]
            let chunk = newArray.slice(0, startingPosition)
            newArray.splice(0, startingPosition)

            // set it
            direction === "fourths" ? setFourths(newArray.concat(chunk)) : setFifths(newArray.concat(chunk))
        }
    }, [listening])

    // Use default fourths array and go in order
    useEffect(() => {
        setNoteToPlay(fourths[0])
    }, [fourths])

    // Use default fifths array and go in order
    useEffect(() => {
        setNoteToPlay(fifths[0])
    }, [fifths])

    // When a note is correct move the note to the end of the array
    useEffect(() => {
        if (correct) {
            let newArray = direction === "fourths" ? [...fourths] : [...fifths]
            let oldNote = newArray.shift()
            newArray.push(oldNote)

            direction === "fourths" ? setFourths(newArray) : setFifths(newArray)
            setCorrect()
        }
    }, [correct])

    const isCorrect = (noteToPlay, notePlaying) => {
        if (noteToPlay === notePlaying.flat) {
            setCorrect(true)
            console.log("correct")
        }
    }

    // If the array isn't reset to default it maintains previous state
    const stop = () => {
        setListening()
        setFourths(fourthsDefault)
        setFifths(fifthsDefault)
    }

    const goBack = () => {
        setListening()
        setOptionsIsOpen()
    }

    return (
        <>
            {!listening &&
                <>
                    <Options optionsIsOpen={optionsIsOpen} start={start} title="Circle of Fifths Options" playMode={playMode} setPlayMode={setPlayMode}>
                        <Fieldset name="Direction">
                            <Direction direction={direction} setDirection={setDirection} />
                        </Fieldset>

                        <Fieldset name="Starting Note">
                            <StartingNote startingNote={startingNote} setStartingNote={setStartingNote} />
                        </Fieldset>

                        <Fieldset name="Diagram">
                            <Diagram diagram={diagram} setDiagram={setDiagram} />
                        </Fieldset>
                    </Options>
                </>
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