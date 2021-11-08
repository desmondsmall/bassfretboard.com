import React, { useState, useEffect } from 'react'
import { CircleOfFifthsOptions } from './CircleOfFifthsOptions'
import { FretboardOptions } from './FretboardOptions'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useBreakpointContext } from "../../context/BreakpointContext"

export const Options = ({ setNoteToPlay, setPlayMode, playMode, optionsIsOpen, start }) => {

    const windowSize = useWindowSize()
    const breakpoints = useBreakpointContext()

    const renderOptions = () => {
        switch (playMode) {
            case 'fretboard':
                return <FretboardOptions setNoteToPlay={setNoteToPlay} />
            case 'circle of fifths':
                return <CircleOfFifthsOptions setNoteToPlay={setNoteToPlay} />
        }
    }

    const renderDescription = () => {
        switch (playMode) {
            case 'fretboard':
                return 'Play random notes across your fretboard.'
            case 'circle of fifths':
                return 'Play around the circle of fifths.'
        }
    }
    
    return (
        <>
            <div className="flex items-center">
                <label htmlFor="practice-mode" className="mr-2">Practice Mode:</label>
                <select
                    id="practice-mode"
                    onChange={(e) => setPlayMode(e.target.value)}
                    value={playMode}
                    className="border py-2 rounded-lg shadow-inner text-sm mr-2">
                    <option value="fretboard">Fretboard</option>
                    <option value="circle of fifths">Circle of Fifths</option>
                </select>
            </div>
            {(windowSize.width >= breakpoints.md) &&
                <>
                    {start}
                </>
            }
            {renderDescription()}

            {(optionsIsOpen || windowSize.width >= breakpoints.md) &&
                <div className={
                    /* global */ `bg-blue-100 
                    ${windowSize.width < breakpoints.md
                    /* mobile */ ? 'absolute inset-x-0 inset-y-0 z-10 bg-green-100'
                    /* dsktop */ : ''}`}
                >
                    {renderOptions()}
                </div>
            }

        </>
    )
}