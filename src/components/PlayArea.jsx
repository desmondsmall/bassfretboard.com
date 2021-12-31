import { Controls } from './PlayArea/Controls'

export const PlayArea = ({ children, playMode, correctCount }) => {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 mt-8 text-center ">
                <h1 className="text-2xl text-gradient bg-gradient-to-t from-blue-200 via-cyan-100 to-sky-300 font-mono uppercase font-bold">Bass Trainer</h1>
                <h2 className="capitalize text-2xl font-mono tracking-widest">{playMode} Mode</h2>
            </div>
            <div className="flex flex-col justify-center items-center" style={{ height: "90vh" }}>
                <div className="h-64 w-64 rounded-full p-1 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 shadow shadow-slate-800">
                    <div className="bg-slate-700 w-full h-full rounded-full flex items-center justify-center">
                        {children}
                    </div>
                    <h3 className="text-center mt-16 text-sm">{correctCount} Correct</h3>
                </div>
                <Controls />
            </div>
        </>
    )
}