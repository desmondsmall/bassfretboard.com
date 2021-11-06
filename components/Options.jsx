import React, { useState, useEffect } from 'react'
import { CircleOfFifthsOptions } from './Options/CircleOfFifthsOptions'
import { FretboardOptions } from './Options/FretboardOptions'
import { useWindowSize } from '../lib/hooks/useWindowSize'

export const Options = ({ setNoteToPlay, setPracticeMode, practiceMode, optionsIsOpen }) => {

    const windowSize = useWindowSize()

    const renderOptions = () => {
        switch (practiceMode) {
            case 'fretboard':
                return <FretboardOptions setNoteToPlay={setNoteToPlay} />
            case 'circle of fifths':
                return <CircleOfFifthsOptions setNoteToPlay={setNoteToPlay} />
        }
    }

    const renderDescription = () => {
        switch (practiceMode) {
            case 'fretboard':
                return 'Play random notes across your fretboard.'
            case 'circle of fifths':
                return 'Play around the circle of fifths.'
        }
    }

    return (
        <>
            <fieldset>
                <legend>Select Practice Mode</legend>
                <select
                    onChange={(e) => setPracticeMode(e.target.value)}
                    value={practiceMode}
                    className="border py-2 rounded-lg shadow-inner text-sm mr-2 w-full">
                    <option value="fretboard">Fretboard</option>
                    <option value="circle of fifths">Circle of Fifths</option>
                </select>
            </fieldset>

            {renderDescription()}

            {(optionsIsOpen || windowSize.width >= 768) &&
                <div className={`${windowSize.width < 768
                    ? 'absolute inset-x-0 inset-y-0 bg-blue-100'
                    : 'bg-blue-200'}`}
                >
                    {renderOptions()}
                </div>
            }

        </>
    )
}