import { notes } from './notes'

export const transpose = (note) => {
    const range = ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
    const letter = note.slice(0, 1)
    const index = range.indexOf(letter)

    if (note.includes("b")) {
        return note.replace(letter + "b", range[index - 1] + "#")
    }

    if (note.includes("#")) {
        return note.replace(letter + "#", range[index + 1] + "b")
    }

    return note
}

export const getFretboardNote = (strings, frets, accidentals) => {

    // Collect the selected strings into an array
    const selectedStrings = []
    strings.map((string) => {
        if (string.selected) {
            selectedStrings.push(string.name)
        }
    })

    // If no strings are selected do the generic four
    if (selectedStrings.length === 0) {
        selectedStrings.push('E', 'A', 'D', 'G')
    }

    // Generate a random string and note
    const string = selectedStrings[Math.floor(Math.random() * selectedStrings.length)]
    const fret = randomIntFromInterval(frets.min, frets.max)
    const note = notes[string][fret]

    // Change the sharp or flat depending on the options
    if (accidentals.sharp && !accidentals.flat) {
        return { 'string': string, 'note': note }
    }
    if (accidentals.flat && !accidentals.sharp) {
        return { 'string': string, 'note': transpose(note) }
    }

    if (accidentals.flat && accidentals.sharp) {
        return { 'string': string, 'note': randomBoolean() ? note : transpose(note) }
    }

    if (!accidentals.sharp && !accidentals.flat && note.length === 3) {
        return { 'string': string, 'note': note.substring(0, 1) + note.substring(2, 3) }
    }

    return { 'string': string, 'note': note }


}

export const pitchToNote = (freq) => {

    if (freq === null) {
        return null
    }

    const sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    const c0 = 440.0 * Math.pow(2.0, -4.75)
    const halfStepsBelowMiddleC = Math.round(12.0 * Math.log2(freq / c0))
    const octave = Math.floor(halfStepsBelowMiddleC / 12.0)
    const sharp = sharps[Math.floor(halfStepsBelowMiddleC % 12)]
    const note = sharp === transpose(sharp) ? sharp : (sharp + octave) + "/" + transpose(sharp) + octave

    return {
        sharp: sharp + octave,
        flat: transpose(sharp) + octave,
        note: note
    }

}

export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomBoolean = () => {
    return Math.random() < 0.5
}