import React, { useState, useEffect } from 'react'
import { Start } from '../components/Start'
import { Stop } from '../components/Stop'
import { Layout } from '../components/Layout'
import { Display } from '../components/Display'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()

  console.log("home rendered")

  return (
    <Layout>

      <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />
      <Stop setListening={setListening} />

      <Display userAudio={userAudio} listening={listening} />



    </Layout>
  )
}