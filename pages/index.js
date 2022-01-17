import React, { useState } from 'react'
import Head from 'next/head'
import { useWindowSize } from './../src/hooks/useWindowSize'
import { useBreakpointContext } from './../src/context/BreakpointContext'
import { Start } from '../src/components/Start'
import { CircleOfFifths } from '../src/components/CircleOfFifths/CircleOfFifths'
import { Reading } from '../src/components/Reading/Reading'
import { Fretboard } from '../src/components/Fretboard/Fretboard'

export default function Home() {

  const [userAudio, setUserAudio] = useState()
  const [listening, setListening] = useState()
  const [playMode, setPlayMode] = useState('fretboard')
  const [optionsIsOpen, setOptionsIsOpen] = useState(false)

  const windowSize = useWindowSize()
  const breakpoints = useBreakpointContext()

  const start = <Start userAudio={userAudio} setUserAudio={setUserAudio} setListening={setListening} />
  const fretboard = <Fretboard userAudio={userAudio} playMode={playMode} setPlayMode={setPlayMode} listening={listening} setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} start={start} />
  const circleoffifths = <CircleOfFifths userAudio={userAudio} playMode={playMode} setPlayMode={setPlayMode} listening={listening} setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} start={start} />
  const reading = <Reading userAudio={userAudio} playMode={playMode} setPlayMode={setPlayMode} listening={listening} setListening={setListening} setOptionsIsOpen={setOptionsIsOpen} optionsIsOpen={optionsIsOpen} start={start} />

  const renderPlayMode = () => {
    switch (playMode) {
      case 'fretboard': return fretboard
      case 'circle of fifths': return circleoffifths
      case 'reading': return reading
    }
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Bass Fretboard - Learn the fretboard on your bass guitar by playing along</title>
        <meta name="description" content="Learn the notes on your bass guitar by playing along. Plug in your bass and get started." />
      </Head>


      {!listening &&
        <>
          <div className="top-0 w-full h-1 lg:h-2 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 z-50 absolute"></div>

          <div className="z-20 relative overflow-hidden
            default-p flex flex-col justify-center mx-auto h-screen items-center -mt-6
            md:-mt-20 md:w-2/3 lg:w-3/5 2xl:w-2/4">
            <div className="2xl:px-8 relative">
              <h1 className="font-mono text-4xl text-teal-200 md:text-5xl 2xl:text-6xl text-gradient bg-gradient-to-l from-yellow-200 via-cyan-200 to-red-300">Bass Fretboard</h1>
              <h2 className="text-lg md:text-3xl tracking-wide mb-5 md:mb-6 mt-1 md:mt-2 md:font-thin">Get better at bass by playing along</h2>
              <h2 className="text-lg md:text-2xl font-thin mb-10 tracking-wide w-full relative lg:leading-10">
                Plug your bass guitar into an audio interface or simply put your phone or a mic beside your amp
              </h2>

              <div className="w-full md:mx-auto md:flex">
                <label for="practice-mode" className="mb-1 block md:hidden">Select Practice Type:</label>
                <select
                  id="practice-mode"
                  onChange={(e) => setPlayMode(e.target.value)}
                  value={playMode}
                  className="w-11/12 bg-slate-200 md:w-2/3 md:mr-1 tracking-wide cursor-pointer h-10 md:h-14 md:text-2xl rounded-md text-gray-900 p-2">
                  <option value="fretboard">Memorize the Fretboard</option>
                  <option value="circle of fifths">Play Circle of Fifths</option>
                </select>
                <div className="hidden md:block md:w-1/3">{start}</div>
              </div>
            </div>
          </div>

          {(windowSize.width < breakpoints.md) &&
            <div className="fixed bottom-2 inset-x-3 flex h-12 mb-2 overflow-hidden z-50">
              {start}
              <button
                onClick={() => setOptionsIsOpen(state => !state)}
                className={`border border-gray-600 shadow shadow-slate-800 bg md:hidden w-1/2 ml-4 text-white font-mono rounded-md`}>
                {optionsIsOpen ? "Go back" : "Options"}
              </button>
            </div>
          }

        </>
      }

      {renderPlayMode()}

    </>
  )
}
