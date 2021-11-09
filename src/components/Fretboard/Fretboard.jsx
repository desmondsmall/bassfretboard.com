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
        }
    ])
    const [frets, setFrets] = useState({ min: 1, max: 7 })
    const [accidentals, setAccidentals] = useState({ sharp: true, flat: false })
    const [noteToPlay, setNoteToPlay] = useState()
    const [correct, setCorrect] = useState()

    useEffect(() => {
        if (listening) {
            setNoteToPlay(getFretboardNote(strings, frets, accidentals))
        }
    }, [listening])

    useEffect(() => {
        if (correct) {
            setNoteToPlay(getFretboardNote(strings, frets, accidentals))
            setCorrect()
        }
    }, [correct])

    const isCorrect = (noteToPlay, notePlaying) => {
        let thisNoteToPlay = noteToPlay.note
        let thisNotePlaying = notePlaying.sharpNote
        if (thisNoteToPlay === thisNotePlaying) {
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
                            <Frets frets={frets} setFrets={setFrets} />
                        </fieldset>
                    </div>
                    {start}
                </Options>
            }

            {(listening && noteToPlay) &&
                <>
                    play {noteToPlay.note} on {noteToPlay.string}
                    <button onClick={()=>setListening()}>stop</button>
                    <button onClick={() => setNoteToPlay(getFretboardNote(strings, frets, accidentals))}>Skip</button>
                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} />
                </>
            }
        </>
    )
}