import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Direction } from './Direction'
import { Diagram } from './Diagram'
import { StartingNote } from './StartingNote'
import { Fieldset } from '../Fieldset'
import { ShowNextNote } from './ShowNextNote'
import { randomIntFromInterval } from '../../functions'

export const CircleOfFifths = ({ userAudio, listening, setListening, setOptionsIsOpen, optionsIsOpen, start, playMode, setPlayMode }) => {

    const fourthsDefault = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G']
    const fifthsDefault = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F']

    const [direction, setDirection] = useState("fourths")
    const [diagram, setDiagram] = useState(false)
    const [startingNote, setStartingNote] = useState("c")
    const [previousNote, setPreviousNote] = useState()
    const [showNextNote, setShowNextNote] = useState(true)
    const [correct, setCorrect] = useState()
    const [noteToPlay, setNoteToPlay] = useState()
    const [format, setFormat] = useState("flat")
    const [playAreaTitle, setPlayAreaTitle] = useState("Circle of Fifths")

    const [fourths, setFourths] = useState(fourthsDefault)
    const [fifths, setFifths] = useState(fifthsDefault)
    // Sets NoteToPlay when random startingNote is selected
    // Otherwise fourths and fifths useEffect hooks handles it with defaults
    useEffect(() => {

        direction === "fourths"
            ? setPlayAreaTitle("Circle of Fourths")
            : setPlayAreaTitle("Circle of Fifths")

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
        setPreviousNote(fourths[11])
        setNoteToPlay(fourths[0])
    }, [fourths])

    // Use default fifths array and go in order
    useEffect(() => {
        setPreviousNote(fifths[11])
        setNoteToPlay(fifths[0])
    }, [fifths])

    // When a note is correct move the note to the end of the array
    useEffect(() => {
        if (correct) {
            let newArray = direction === "fourths" ? [...fourths] : [...fifths]
            let oldNote = newArray.shift()
            newArray.push(oldNote)

            if (direction === "fourths") {
                setFourths(newArray)
            }
            if (direction === "fifths") {
                setFifths(newArray)
            }
            setPreviousNote(newArray[11])
            setCorrect()
        }
    }, [correct])

    const isCorrect = (noteToPlay, notePlaying) => {
        if (noteToPlay === notePlaying.flat) {
            setCorrect(true)
        }
    }

    // If the array isn't reset to default it maintains previous state
    const goBack = () => {
        setListening()
        setFourths(fourthsDefault)
        setFifths(fifthsDefault)
        setOptionsIsOpen()
    }

    const skip = () => {
        setCorrect(true)
    }

    return (
        <>
            {!listening &&
                <>
                    <Options optionsIsOpen={optionsIsOpen} start={start} title="Circle of Fifths Options" playMode={playMode} setPlayMode={setPlayMode}>
                        <Fieldset name="Direction">
                            <Direction direction={direction} setDirection={setDirection} />
                        </Fieldset>

                        <Fieldset name="Show Legend">
                            <Diagram diagram={diagram} setDiagram={setDiagram} />
                        </Fieldset>

                        <Fieldset name="Starting Note">
                            <StartingNote startingNote={startingNote} setStartingNote={setStartingNote} />
                        </Fieldset>

                        <Fieldset name="Show the next note">
                            <ShowNextNote showNextNote={showNextNote} setShowNextNote={setShowNextNote} />
                        </Fieldset>
                    </Options>
                </>
            }

            {(listening && noteToPlay) &&
                <>
                    <div className="flex items-center justify-center flex-col min-h-screen bg">
                        <div className="text-center xl:-mt-12">
                            <h1 className="text-2xl md:text-3xl text-teal-100 font-mono uppercase tracking-wide">Bass Fretboard</h1>
                            <h2 className="capitalize text-2xl md:text-4xl font-mono">Circle of Fifths Mode</h2>

                            <div className="flex flex-col justify-center items-center my-8">
                            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 shadow shadow-slate-800 relative">
                                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} format={format} />
                                    <div className="bg-slate-700 w-full h-full rounded-full flex items-center justify-center relative">
                                        {showNextNote
                                            ?
                                            <h1 className="text-center text-2xl tracking-wide md:text-5xl">
                                                Play <span className="text-blue-300 font-bold">{noteToPlay}</span>
                                            </h1>
                                            :
                                            <div>
                                                <h1 class="text-2xl md:text-5xl font-mono mb-4 text-center mt-4">
                                                    Play the<br /> Note After <span class="block mt-2 text-blue-300 text-4xl font-bold md:text-6xl">{previousNote}</span>
                                                </h1>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div class="text-center mt-8">
                                    {(diagram && direction === "fifths") &&
                                        <div className="md:text-2xl">
                                            C | G | D | A | E | B | F#/G♭ | C♯/D♭ | A♭| E♭| B♭| F
                                        </div>
                                    }
                                    {(diagram && direction === "fourths") &&
                                        <div className="md:text-2xl">
                                            C | F | B♭ | E♭ | A♭ | D♭ | G♭ | B | E | A | D | G
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="control-button" onClick={goBack}>Go Back</button>
                                <button className="control-button bg-gradient-brand" onClick={skip}>Skip</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}