import { FiRotateCcw, FiRotateCw } from 'react-icons/fi'

export const Direction = ({ direction, setDirection }) => {
    return (
        <>
            <button
                onClick={() => setDirection('fourths')}
                className={` ${direction === 'fourths' ? 'active' : ''}`}>
                4ths <FiRotateCcw className="inline text-xl" />
            </button>
            <button
                onClick={() => setDirection('fifths')}
                className={` ${direction == 'fifths' ? 'active' : ''}`}>
                5ths <FiRotateCw className="inline text-xl" />
            </button>
        </>
    )
}