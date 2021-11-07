const fretboardNote = (strings, frets) => {
}

const pitchToNote = (freq) => {

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

export { pitchToNote }