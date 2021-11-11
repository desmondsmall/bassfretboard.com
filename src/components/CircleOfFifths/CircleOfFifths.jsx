import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Direction } from './Direction'
import { StartingNote } from './StartingNote'
import { Fieldset } from '../Fieldset'
import { randomIntFromInterval } from '../../functions'

export const CircleOfFifths = ({ userAudio, listening, setListening, optionsIsOpen, start }) => {

    const [direction, setDirection] = useState("fourths")
    const [startingNote, setStartingNote] = useState("c")
    const [correct, setCorrect] = useState()
    const [noteToPlay, setNoteToPlay] = useState()
    const [format, setFormat] = useState("flat")

    const [fourths, setFourths] = useState(['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G'])
    const [fifths, setFifths] = useState(['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'])

    useEffect(() => {
        if (listening) {
            if (startingNote === "random") {
                let array = direction === "fourths" ? [...fourths] : [...fifths]
                console.log(direction)
                let startingPosition = randomIntFromInterval(1, 11)
                console.log(startingPosition + " is " + array[startingPosition])

                let newArray = [...array]
                let chunk = newArray.slice(0, startingPosition)
                newArray.splice(0, startingPosition)
                console.log(newArray.concat(chunk))
                direction === "fourths" ? setFourths(newArray.concat(chunk)) : setFifths(newArray.concat(chunk))
            }
        }
    }, [listening])

    useEffect(() => {
        setNoteToPlay(fourths[0])
    }, [fourths])

    useEffect(() => {
        setNoteToPlay(fifths[0])
    }, [fifths])

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