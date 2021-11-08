import React, { useState, useEffect } from 'react'
import { getFretboardNote } from '../../../helpers'
import { Accidentals } from './Accidentals'
import { Strings } from './Strings'
import { Frets } from './Frets'

export const FretboardOptions = ({ strings, setStrings, accidentals, setAccidentals, frets, setFrets }) => {

    return (
        <>
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
        </>
    )
}