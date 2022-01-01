import React, { useState } from 'react'
import Head from 'next/head'
import { GiGuitarBassHead } from 'react-icons/gi'
import { Start } from '../src/components/Start'
import { MobileControls } from '../src/components/MobileControls'
import { CircleOfFifths } from '../src/components/CircleOfFifths/CircleOfFifths'
import { Fretboard } from '../src/components/Fretboard/Fretboard'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [playMode, setPlayMode] = useState('fretboard')
  const [optionsIsOpen, setOptionsIsOpen] = useState(true)

  const start = <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />
  const fretboard = <Fretboard userAudio={userAudio} playMode={playMode} setPlayMode={setPlayMode} listening={listening} setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} start={start} />
  const circleoffifths = <CircleOfFifths userAudio={userAudio} playMode={playMode} setPlayMode={setPlayMode} listening={listening} setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} start={start} />

  const renderPlayMode = () => {
    switch (playMode) {
      case 'fretboard': return fretboard
      case 'circle of fifths': return circleoffifths
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
        <>
          <div className="top-0 w-full h-1 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 z-50 absolute"></div>

          <div className="z-10 relative
            default-p flex flex-col justify-center mx-auto min-h-screen -mt-8 lg:-mt-16 xl:-mt-20
            md:-mt-12 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/4">
            <div className="2xl:px-8 relative">
              <GiGuitarBassHead className="absolute right-0 text-5xl md:text-8xl rotate-12 md:-mr-6 md:-mt-6" />
              <h1 className="font-mono text-4xl text-teal-200 md:text-5xl xl:text-6xl">Bass Trainer</h1>
              <h2 className="text-xl md:text-3xl tracking-wide mb-5 md:mb-10 mt-1 md:mt-2 md:font-thin">Practice by playing along</h2>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-thin mb-10 tracking-wide w-full relative xl:text-4xl lg:leading-10">
                Plug your bass into an audio interface or put your phone / mic beside your amp
              </h2>

              <div className="w-full md:mx-auto md:flex">
                <label for="practice-mode" className="mb-1 block md:hidden">Select Practice Type:</label>
                <select
                  id="practice-mode"
                  onChange={(e) => setPlayMode(e.target.value)}
                  value={playMode}
                  className="md:w-2/3 md:mr-1 w-auto tracking-wide cursor-pointer h-10 md:h-14 md:text-xl font-mono bg-white rounded-md text-gray-900 lg:text-2xl">
                  <option value="fretboard">Memorize the Fretboard</option>
                  <option value="circle of fifths">Circle of Fifths</option>
                </select>
                <div className="hidden md:block md:w-1/3">{start}</div>
              </div>

            </div>
          </div>

          <MobileControls start={start} optionsIsOpen={optionsIsOpen} setOptionsIsOpen={setOptionsIsOpen} />
        </>
      }

      {renderPlayMode()}

    </>
  )
}
