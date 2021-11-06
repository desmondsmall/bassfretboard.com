import React, { useState } from 'react'
import { CircleOfFifthsOptions } from './Options/CircleOfFifthsOptions'
import { FretboardOptions } from './Options/FretboardOptions'

export const Options = ({ setNoteToPlay, setPracticeMode, practiceMode}) => {

    const renderPracticeMode = () => {
        switch (practiceMode) {
            case 'fretboard':
                return <FretboardOptions setNoteToPlay={setNoteToPlay} />
            case 'circle of fifths':
                return <CircleOfFifthsOptions setNoteToPlay={setNoteToPlay} />
        }
    }

    return (
        <>
            <h2>Select mode:</h2>
            <select onChange={(e) => setPracticeMode(e.target.value)} value={practiceMode} className="border py-2 rounded-lg shadow-inner text-sm mr-2">
                <option value="fretboard">Fretboard</option>
                <option value="circle of fifths">Circle of Fifths</option>
            </select>

            <div className="my-8">
                {renderPracticeMode()}
            </div>
        </>
    )
}