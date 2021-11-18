import { FiRotateCcw, FiRotateCw } from 'react-icons/fi'

export const Direction = ({ direction, setDirection }) => {
    return (
        <>
            <button
                onClick={() => setDirection('fourths')}
                className={`option-button md:flex md:items-center md:justify-center md:w-24 ${direction === 'fourths' ? 'active' : ''}`}>
                4ths <FiRotateCcw className="inline md:block md:ml-2 text-xl" />
            </button>
            <button
                onClick={() => setDirection('fifths')}
                className={`option-button md:flex md:items-center md:justify-center md:w-24 ${direction == 'fifths' ? 'active' : ''}`}>
                5ths <FiRotateCw className="inline md:block md:ml-2 text-xl" />
            </button>
        </>
    )
}