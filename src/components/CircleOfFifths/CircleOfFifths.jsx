import React, { useState, useEffect } from 'react'
import { PlayArea } from '../PlayArea'
import { Controls } from '../PlayArea/Controls'
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
    console.log(noteToPlay)
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
            console.log("correct")
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

                        <Fieldset name="Diagram">
                            <Diagram diagram={diagram} setDiagram={setDiagram} />
                        </Fieldset>

                        <Fieldset name="Starting Note">
                            <StartingNote startingNote={startingNote} setStartingNote={setStartingNote} />
                        </Fieldset>

                        <Fieldset name="Show Next Note">
                            <ShowNextNote showNextNote={showNextNote} setShowNextNote={setShowNextNote} />
                        </Fieldset>
                    </Options>
                </>
            }

            {(listening && noteToPlay) &&
                <div className="-mt-4 md:mt-0">
                    <PlayArea title={playAreaTitle}>
                        <div>
                            {showNextNote
                                ?
                                <h1 className="text-center text-2xl tracking-wide md:text-5xl">
                                    Play <span className="text-blue-300 font-bold">{noteToPlay}</span>
                                </h1>
                                :
                                <div>
                                    <h1 className="text-center text-6xl tracking-wide md:text-8xl text-blue-300">
                                        ?
                                    </h1>
                                </div>
                            }
                        </div>
                        <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} format={format} />
                    </PlayArea>
                    <div class="w-full mx-auto text-center -mt-32 md:-mt-44 mb-12 md:mb-16">
                        {!showNextNote &&
                            <h1 class="text-3xl md:text-5xl font-mono mb-4">
                                Last Note: <span class="text-blue-300">{previousNote}</span></h1>
                        }
                        {(diagram && direction === "fifths") &&
                            <div className="md:text-2xl tracking-widest">
                                C | G | D | A | E | B | F#/G♭ | C♯/D♭ | A♭| E♭| B♭| F
                            </div>
                        }
                        {(diagram && direction === "fourths") &&
                            <div className="md:text-2xl tracking-widest">
                                C | F | B♭ | E♭ | A♭ | D♭ | G♭ | B | E | A | D | G
                            </div>
                        }
                    </div>
                    <Controls>
                        <button className="control-button" onClick={goBack}>Go Back</button>
                        <button className="control-button bg-gradient-brand" onClick={skip}>Skip</button>
                    </Controls>
                </div>
            }
        </>
    )
}