import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Display } from '../components/Display'
import { Start } from "../components/Start"
import { Stop } from "../components/Stop"
import { OptionsToggle } from "../components/OptionsToggle"
export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [optionsIsOpen, setOptionsIsOpen] = useState()

  return (
    <Layout>

      <Display
        userAudio={userAudio}
        listening={listening}
        optionsIsOpen={optionsIsOpen}
        setOptionsIsOpen={setOptionsIsOpen}
      />

      {listening &&
        <Stop setListening={setListening} />
      }
      <div className="flex mt-2">
        <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />
        <OptionsToggle setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} />
      </div>

    </Layout>
  )
}