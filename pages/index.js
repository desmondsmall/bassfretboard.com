import React, { useState } from 'react'
import Head from 'next/head'
import { Welcome } from '../src/components/Welcome'
import { Start } from '../src/components/Start'
import { CircleOfFifths } from '../src/components/CircleOfFifths/CircleOfFifths'
import { Fretboard } from '../src/components/Fretboard/Fretboard'
import { SelectPlayMode } from '../src/components/SelectPlayMode'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [playMode, setPlayMode] = useState('fretboard')
  const [optionsIsOpen, setOptionsIsOpen] = useState()

  const start = <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />

  console.log("home rendered")

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Bass Trainer</title>
        <meta name="description" content="wee" />
      </Head>

      {!listening &&
        <Welcome
          playMode={playMode}
          setPlayMode={setPlayMode}
          start={start}
          optionsIsOpen={optionsIsOpen}
          setOptionsIsOpen={setOptionsIsOpen}
        />
      }

      {playMode === 'fretboard' &&
        <Fretboard
          userAudio={userAudio}
          listening={listening}
          setListening={setListening}
          optionsIsOpen={optionsIsOpen}
          start={start}
        />
      }

      {playMode === 'circle of fifths' &&
        <CircleOfFifths
          userAudio={userAudio}
          listening={listening}
          setListening={setListening}
          optionsIsOpen={optionsIsOpen}
          start={start}
        />
      }

    </>
  )
}
