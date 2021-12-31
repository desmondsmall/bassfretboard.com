import { notes } from './notes'

export const isFlat = (note) => {
    if (note.includes("b")) {
        return true
    }

    return false
}

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

export const pitchToNote = (freq) => {

    if (freq === null || freq < 30 || freq > 530) {
        return null
    }

    const sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    const c0 = 440.0 * Math.pow(2.0, -4.75)
    const halfStepsBelowMiddleC = Math.round(12.0 * Math.log2(freq / c0))
    const octave = Math.floor(halfStepsBelowMiddleC / 12.0)
    const sharp = sharps[Math.floor(halfStepsBelowMiddleC % 12)]
    const flat = transpose(sharp)
    const note = (flat === sharp) ? sharp : sharp + "/" + flat

    return {
        sharp: sharp,
        flat: flat,
        note: note,
        octave: octave,
    }

}

export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomBoolean = () => {
    return Math.random() < 0.5
}