import React, { useState } from 'react'
import Head from 'next/head'
import { Fretboard } from '../src/components/Fretboard/Fretboard'
import { Welcome } from '../src/components/Welcome'
import { Stop } from '../src/components/Stop'
import { Start } from '../src/components/Start'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [playMode, setPlayMode] = useState('fretboard')
  const [optionsIsOpen, setOptionsIsOpen] = useState()

  const start = <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />
  const stop = <Stop setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} />

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

      <Welcome
        listening={listening}
        playMode={playMode}
        start={start}
        stop={stop}
        setOptionsIsOpen={setOptionsIsOpen}
      />

      <Fretboard
        start={start}
        stop={stop}
        listening={listening}
        setListening={setListening}
        userAudio={userAudio}
        optionsIsOpen={optionsIsOpen}
        setOptionsIsOpen={setOptionsIsOpen}
      />

    </>
  )
}
