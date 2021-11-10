import React, { useState } from 'react'
import Head from 'next/head'
import { Welcome } from '../src/components/Welcome'
import { Start } from '../src/components/Start'
import { CircleOfFifths } from '../src/components/CircleOfFifths/CircleOfFifths'
import { Fretboard } from '../src/components/Fretboard/Fretboard'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [playMode, setPlayMode] = useState('circle of fifths')
  const [optionsIsOpen, setOptionsIsOpen] = useState()

  const start = <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />

  const playModeProps = {
    userAudio: userAudio,
    listening: listening,
    setListening: setListening,
    optionsIsOpen: optionsIsOpen,
    start: start
  }

  const renderPlayMode = () => {
    switch (playMode) {
      case 'fretboard':
        return <Fretboard {...playModeProps} />

      case 'circle of fifths':
        return <CircleOfFifths {...playModeProps} />
    }
  }

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

      {renderPlayMode()}

    </>
  )
}
