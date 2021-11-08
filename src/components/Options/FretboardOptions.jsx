import React, { useState } from 'react'

export const FretboardOptions = ({ setNoteToPlay }) => {

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
    const [accidentals, setAccidentals] = useState({ sharps: true, flats: false })

    return (
        <>
            FRETBOARD OPTIONS
        </>
    )
}