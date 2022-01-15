import { Controls } from './PlayArea/Controls'

export const PlayArea = ({ children, title }) => {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 mt-8 text-center">
                <h1 className="text-2xl md:text-3xl md:mb-1 text-gradient bg-gradient-to-t from-blue-200 via-cyan-100 to-sky-300 font-mono uppercase tracking-wide">Bass Trainer</h1>
                <h2 className="capitalize text-2xl md:text-4xl font-mono">{title}</h2>
            </div>
            <div className="flex flex-col justify-center items-center" style={{ height: "90vh" }}>
                <div className="play-area-circle rounded-full p-1 bg-gradient-to-r from-yellow-200 via-cyan-400 to-pink-300 shadow shadow-slate-800">
                    <div className="bg-slate-700 w-full h-full rounded-full flex items-center justify-center relative">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}