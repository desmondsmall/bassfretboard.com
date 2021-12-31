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
          <GiGuitarBassHead className="text-7xl md:text-9xl rotate-45 rounded-full p-2 text-white absolute top-4 left-0 z-50" />
          <div className="top-0 w-full h-1 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 z-50 absolute"></div>
          
          <div className="z-10 relative
            default-p flex flex-col justify-center mx-auto min-h-screen -mt-6 lg:-mt-16
            md:-mt-12 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
            <div className="2xl:px-6 text-center">
              <h1 className="font-mono mb-2 text-3xl uppercase tracking-widest text-gradient bg-gradient-to-t from-blue-200 via-cyan-100 to-sky-300 lg:text-5xl md:text-4xl md:mb-4">Bass Trainer</h1>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-thin mb-10 tracking-wide w-full relative">
                Plug your bass into an audio interface, or put your phone or mic beside your amp
              </h1>

              <div className="w-11/12 md:w-full mx-auto md:flex">
                <select
                  id="practice-mode"
                  onChange={(e) => setPlayMode(e.target.value)}
                  value={playMode}
                  className="md:w-2/3 w-full tracking-tight cursor-pointer h-10 md:h-14 md:text-xl font-mono bg-white rounded-md text-gray-900 text-center">
                  <option value="fretboard">Memorize the Fretboard</option>
                  <option value="circle of fifths">Practice Circle of Fifths</option>
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
