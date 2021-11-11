import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Accidentals } from './Accidentals'
import { Strings } from './Strings'
import { Fieldset } from '../Fieldset'
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
            console.log("listeningsdisdfn")
            setNoteToPlay(getFretboardNote(strings, fretMinMax, accidentals))
            console.log(noteToPlay.note +"here")
        }
    }, [listening])

    useEffect(() => {
        if (correct) {
            setNoteToPlay(getFretboardNote(strings, fretMinMax, accidentals))
            setCorrect()
        }
    }, [correct])

    const isCorrect = (noteToPlay, notePlaying) => {
        if ((noteToPlay.note === notePlaying.sharp + notePlaying.octave) ||
            (noteToPlay.note === notePlaying.flat + notePlaying.octave)) {
            setCorrect(true)
            console.log("CORRECT")
        }
    }

    return (
        <>
            {!listening &&
                <Options optionsIsOpen={optionsIsOpen}>
                    <Fieldset name="Strings">
                        <Strings strings={strings} setStrings={setStrings} />
                    </Fieldset>

                    <Fieldset name="Accidentals">
                        <Accidentals accidentals={accidentals} setAccidentals={setAccidentals} />
                    </Fieldset>

                    <Fieldset name="Fret Range">
                        <Frets fretMinMax={fretMinMax} setFretMinMax={setFretMinMax} />
                    </Fieldset>
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