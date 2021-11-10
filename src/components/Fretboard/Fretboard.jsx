import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Accidentals } from './Accidentals'
import { Strings } from './Strings'
import { Frets } from './Frets'
import { getFretboardNote } from '../../functions'

export const Fretboard = ({ userAudio, listening, setListening, optionsIsOpen, start }) => {

    const [strings, setStrings] = useState([
        {
            name: 'B',
            selected: false
        },
        {
            name: 'E',
            selected: true
        },
        {
            name: 'A',
            selected: false
        },
        {
            name: 'D',
            selected: false
        },
        {
            name: 'G',
            selected: false
        },
    ])
    const [fretMinMax, setFretMinMax] = useState({ min: 1, max: 7 })
    const [accidentals, setAccidentals] = useState({ sharp: true, flat: false })
    const [noteToPlay, setNoteToPlay] = useState()
    const [correct, setCorrect] = useState()

    console.log("fretboard rendered")

    useEffect(() => {
        if (listening) {
            setNoteToPlay(getFretboardNote(strings, fretMinMax, accidentals))
        }
    }, [listening])

    useEffect(() => {
        if (correct) {
            setNoteToPlay(getFretboardNote(strings, fretMinMax, accidentals))
            setCorrect()
        }
    }, [correct])

    const isCorrect = (noteToPlay, notePlaying) => {
        if ((noteToPlay.note === notePlaying.sharp) || (noteToPlay.note === notePlaying.flat)) {
            setCorrect(true)
            console.log("CORRECT")
        }
    }

    return (
        <>
            {!listening &&
                <Options optionsIsOpen={optionsIsOpen}>
                    <div className="">
                        <fieldset className="">
                            <legend className="">Strings</legend>
                            <Strings strings={strings} setStrings={setStrings} />
                        </fieldset>

                        <fieldset className="">
                            <legend className="">Accidentals</legend>
                            <Accidentals accidentals={accidentals} setAccidentals={setAccidentals} />
                        </fieldset>

                        <fieldset className="">
                            <legend className="">Fret Range</legend>
                            <Frets fretMinMax={fretMinMax} setFretMinMax={setFretMinMax} />
                        </fieldset>
                    </div>
                    {start}
                </Options>
            }

            {(listening && noteToPlay) &&
                <>
                    play {noteToPlay.note} on {noteToPlay.string}

                    <button onClick={() => setListening()}>stop</button>
                    <button onClick={() => setNoteToPlay(getFretboardNote(strings, fretMinMax, accidentals))}>Skip</button>
                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} />
                </>
            }
        </>
    )
}