import React, { useState } from 'react'
import Head from 'next/head'
import { Display } from '../components/Display'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [breakpoints] = useState({ md: 768 })

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
        breakpoints={breakpoints}
      />

    </>
  )
}