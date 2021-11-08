import React, { useState } from 'react'
import Head from 'next/head'
import { Display } from '../src/components/Display'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()

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
      
      <Display
        userAudio={userAudio}
        setUserAudio={setUserAudio}
        listening={listening}
        setListening={setListening}
      />

    </>
  )
}

// you must setNoteToPlay in play section
// you need to lift mode options (frets, etc) to Display or reorganize

// maybe display can render each mode, and each mode renders its own options and play components, rather than
// having an "options" component render each mode and a "play" component render each mode