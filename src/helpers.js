import { notes } from './notes'

export const getFretboardNote = (strings, frets, accidentals) => {

    // Collect the selected strings into an array
    const selectedStrings = []
    strings.map((string) => {
        if (string.selected) {
            selectedStrings.push(string.name)
        }
    })
console.log(selectedStrings)
    // If no strings are selected add the big four
    if (selectedStrings.length === 0) {
        selectedStrings.push('E', 'A', 'D', 'G')
    }

    // These are numeric values that correspond to the indexes on the notes array
    const string = selectedStrings[Math.floor(Math.random() * selectedStrings.length)]
    const fret = randomIntFromInterval(frets.min, frets.max)
    const note = notes[string][fret]

    return { 'string': string, 'note': note }
}

export const pitchToNote = (freq) => {

    if (freq === null) {
        return null
    }

    const sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    const c0 = 440.0 * Math.pow(2.0, -4.75)
    const halfStepsBelowMiddleC = Math.round(12.0 * Math.log2(freq / c0))
    const octave = Math.floor(halfStepsBelowMiddleC / 12.0)
    const flat = flats[Math.floor(halfStepsBelowMiddleC % 12)]
    const sharp = sharps[Math.floor(halfStepsBelowMiddleC % 12)]

    return { sharp: sharp, flat: flat, octave: octave }

}

export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomBoolean = () => {
    return Math.random() < 0.5
}