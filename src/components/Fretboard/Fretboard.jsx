import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Accidentals } from './Accidentals'
import { Strings } from './Strings'
import { Fieldset } from '../Fieldset'
import { Frets } from './Frets'
import { isFlat, randomBoolean, randomIntFromInterval, transpose } from '../../functions'
import { notes } from '../../notes'

export const Fretboard = ({ userAudio, listening, setListening, optionsIsOpen, start, playMode, setPlayMode, setOptionsIsOpen }) => {

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
    const [previousNoteToPlay, setPreviousNoteToPlay] = useState()
    const [noteToPlay, setNoteToPlay] = useState()
    const [correct, setCorrect] = useState()
    const [format, setFormat] = useState()

    // Generate a noteToPlay, reset correct notes
    useEffect(() => {
        if (listening) {
            let note = getFretboardNote(strings, fretMinMax, accidentals)
            isFlat(note.note) ? setFormat('flat') : setFormat('sharp')
            setNoteToPlay(note)
            setPreviousNoteToPlay(note)
        }
    }, [listening])

    useEffect(() => {
        if (correct) {
            getNoteToPlayWithoutDuplicates()
            setCorrect()
        }
    }, [correct])

    const getFretboardNote = (strings, fretMinMax, accidentals) => {

        // Collect the selected strings
        const selectedStrings = []
        strings.map((string) => {
            if (string.selected) {
                selectedStrings.push(string.name)
            }
        })

        // Default to EADG if none are selected
        if (selectedStrings.length === 0) {
            selectedStrings.push('E', 'A', 'D', 'G')
        }

        // Generate a random string and note
        const string = selectedStrings[Math.floor(Math.random() * selectedStrings.length)]
        const fret = randomIntFromInterval(fretMinMax.min, fretMinMax.max)
        const note = notes[string][fret]

        // Change the sharp or flat depending on the options
        if (!accidentals.sharp && accidentals.flat) {
            return { 'string': string, 'note': transpose(note) }
        }

        if (accidentals.sharp && accidentals.flat) {
            return { 'string': string, 'note': randomBoolean() ? note : transpose(note) }
        }

        if (!accidentals.sharp && !accidentals.flat) {
            if (note.length === 3) {
                let newNote = note.substring(0, 1) + note.substring(2, 3)
                return { 'string': string, 'note': newNote }
            }
        }

        return { 'string': string, note: note }
    }

    const isCorrect = (noteToPlay, notePlaying) => {
        if ((noteToPlay.note === notePlaying.sharp + notePlaying.octave) ||
            (noteToPlay.note === notePlaying.flat + notePlaying.octave)) {
            setCorrect(true)
            console.log("CORRECT")
        }
    }

    // prevents confusing UI where correct note is sustained 
    // into the next noteToPlay and they match
    const getNoteToPlayWithoutDuplicates = () => {
        while (true) {
            let note = getFretboardNote(strings, fretMinMax, accidentals)
            if (note.note != previousNoteToPlay.note) {
                isFlat(note.note) ? setFormat('flat') : setFormat('sharp')
                setNoteToPlay(note)
                setPreviousNoteToPlay(note)
                break
            }
        }
    }

    const goBack = () => {
        setListening()
        setOptionsIsOpen()
    }

    return (
        <>
            {!listening &&
                <>
                    <Options optionsIsOpen={optionsIsOpen} start={start} title="Fretboard Options" playMode={playMode} setPlayMode={setPlayMode}>
                        <Fieldset name="Strings">
                            <Strings strings={strings} setStrings={setStrings} />
                        </Fieldset>

                        <Fieldset name="Accidentals">
                            <Accidentals accidentals={accidentals} setAccidentals={setAccidentals} />
                        </Fieldset>

                        <Fieldset name="Fret Range">
                            <Frets fretMinMax={fretMinMax} setFretMinMax={setFretMinMax} />
                        </Fieldset>
                    </Options>
                </>
            }

            {(listening && noteToPlay) &&
                <>
                    <div className="flex items-center justify-center flex-col min-h-screen bg">
                        <div className="text-center xl:-mt-12">
                            <h1 className="text-2xl md:text-3xl text-teal-100 font-mono uppercase tracking-wide">Bass Fretboard</h1>
                            <h2 className="capitalize text-2xl md:text-4xl font-mono">Fretboard Mode</h2>

                            <div className="flex flex-col justify-center items-center my-8 lg:my-12">
                                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 shadow shadow-slate-800 relative">
                                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} format={format} />
                                    <div className="bg-slate-700 w-full h-full rounded-full flex items-center justify-center relative">
                                        <h1 className="text-center text-2xl tracking-wide md:text-4xl">
                                            Play <span className="text-blue-300 font-bold">{noteToPlay.note}</span>
                                            <span className="block my-2">on the</span>
                                            <span className="text-blue-300 font-bold">{noteToPlay.string}</span> String
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="control-button" onClick={goBack}>Go Back</button>
                                <button className="control-button bg-gradient-brand" onClick={getNoteToPlayWithoutDuplicates}>Skip</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}