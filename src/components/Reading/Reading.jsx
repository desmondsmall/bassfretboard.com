import React, { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Analyser } from '../Analyser'
import { Fieldset } from '../Fieldset'
import { isFlat, randomBoolean, randomIntFromInterval, transpose } from '../../functions'
import { Controls } from '../PlayArea/Controls'
import { notes } from '../../notes'
import { PlayArea } from '../PlayArea'

export const Reading = ({ userAudio, listening, setListening, optionsIsOpen, start, playMode, setPlayMode, setOptionsIsOpen }) => {

    const [previousNoteToPlay, setPreviousNoteToPlay] = useState()
    const [noteToPlay, setNoteToPlay] = useState()
    const [correct, setCorrect] = useState()
    const [format, setFormat] = useState()

    console.log("fretboard rendered")

    // Generate a noteToPlay, reset correct notes
    useEffect(() => {
        if (listening) {
            setNoteToPlay("C")
            setPreviousNoteToPlay(noteToPlay)
        }
    }, [listening])

    useEffect(() => {
        if (correct) {
            getNoteToPlayWithoutDuplicates()
            setCorrect()
        }
    }, [correct])

    const getReadingNote = () => {

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
    const getReadingNoteWithoutDuplicates = () => {
        while (true) {
            let note = getReadingNote()
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
                    <Options optionsIsOpen={optionsIsOpen} start={start} title="Reading Options" playMode={playMode} setPlayMode={setPlayMode}>
                        <Fieldset name="Option">
                        </Fieldset>
                    </Options>
                </>
            }

            {(listening && noteToPlay) &&
                <>
                    <div className="absolute top-0 left-0 right-0 mt-8 text-center">
                        <h1 className="text-2xl md:text-3xl md:mb-1 text-gradient bg-gradient-to-t from-blue-200 via-cyan-100 to-sky-300 font-mono uppercase tracking-wide">Bass Trainer</h1>
                        <h2 className="capitalize text-2xl md:text-4xl font-mono">Sight Reading</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center" style={{ height: "90vh" }}>
                        <div className="w-full h-44 p-1 shadow shadow-slate-800">
                            <div className="bg-slate-700 w-full h-full flex items-center justify-center">

                                <span className="absolute left-0 text-8xl mt-6 ml-3 lg:ml-5 z-10"> &#119074;</span>
                                <ul className="w-full default-p relative text-center">
                                    <li className="border-b border-slate-400 h-4 text-center relative">
                                        <span className="text-7xl z-10 -mt-14 absolute">&#9833;<hr className="relative -mt-3"/></span> {/* D */}
                                        <span className="text-7xl z-10 -mt-14 absolute hidden">&#9833;<hr className="relative -mt-4"/></span> {/* C */}
                                        <span className="text-7xl z-10 -mt-12 absolute hidden">&#9833;</span>{/* B */}
                                        <span className="text-7xl z-10 -mt-10 absolute hidden">&#9833;</span>{/* A */}
                                    </li>
                                    <li className="border-b border-slate-400 h-4 text-center relative">
                                        <span className="text-7xl z-10 -mt-12 absolute hidden">&#9833;</span>{/* G */}
                                        <span className="text-7xl z-10 -mt-10 absolute hidden">&#9833;</span>{/* F */}
                                    </li>
                                    <li className="border-b border-slate-400 h-4 text-center relative">
                                        <span className="text-7xl z-10 -mt-12 absolute hidden">&#9833;</span>{/* E */}
                                        <span className="text-7xl z-10 -mt-10 absolute hidden">&#9833;</span>{/* D */}
                                    </li>
                                    <li className="border-b border-slate-400 h-4 text-center relative">
                                        <span className="text-7xl z-10 -mt-12 absolute hidden">&#9833;</span>{/* C */}
                                        <span className="text-7xl z-10 -mt-10 absolute hidden">&#9833;</span>{/* B */}
                                    </li>
                                    <li className="border-b border-slate-400 h-4 text-center relative">
                                        <span className="text-7xl z-10 -mt-12 absolute hidden">&#9833;</span>{/* A */}
                                        <span className="text-7xl z-10 -mt-10 absolute hidden">&#9833;</span> {/* G */}
                                        <span className="text-7xl z-10 -mt-8 absolute hidden">&#9833;<hr className="relative -mt-2"/></span> {/* F */}
                                        <span className="text-7xl z-10 -mt-6 absolute hidden">&#9833;<hr className="relative -mt-4"/></span> {/* E */}
                                            
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Analyser userAudio={userAudio} listening={listening} isCorrect={isCorrect} noteToPlay={noteToPlay} format={format} />
                    <Controls>
                        <button className="control-button" onClick={goBack}>Go Back</button>
                        <button className="control-button bg-gradient-brand" onClick={getReadingNoteWithoutDuplicates}>Skip</button>
                    </Controls>
                </>
            }
        </>
    )
}