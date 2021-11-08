export const Play = ({ noteToPlay, playMode, stop }) => {
    console.log(noteToPlay)
    return (
        <>
            {noteToPlay.string}
            {noteToPlay.note}
            {stop}
        </>
    )
}