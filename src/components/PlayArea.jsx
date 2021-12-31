import { Controls } from './PlayArea/Controls'

export const PlayArea = ({ children, playMode, correctCount }) => {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 mt-8 text-center">
                <h1 className="text-l mb-1">Bass Trainer</h1>
                <h2 className="capitalize text-lg font-mono">{playMode} Mode</h2>
            </div>
            <div className="flex flex-col justify-center items-center" style={{ height: "90vh" }}>
                <div className="h-64 w-64 rounded-full p-1 bg-gradient-to-tr from-blue-200 to-green-200">
                    <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                        {children}
                    </div>
                    <h3 className="text-center mt-16 text-sm">{correctCount} Correct</h3>
                </div>
                <Controls />
            </div>
        </>
    )
}