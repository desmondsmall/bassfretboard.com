import React, { useState, useEffect } from 'react'
import { Fretboard } from './FretboardPlay'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useBreakpointContext } from "../../context/BreakpointContext"

export const Options = ({  }) => {

    const renderOptions = () => {
        switch (practiceMode) {
            case 'fretboard':
                return <FretboardOptions setNoteToPlay={setNoteToPlay} />
            case 'circle of fifths':
                return <CircleOfFifthsOptions setNoteToPlay={setNoteToPlay} />
        }
    }