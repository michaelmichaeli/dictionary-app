import React, { useEffect, useState } from 'react'
import { WordsStore } from './WordsStore'

type NewLetterInputProps = {
    loadWords: WordsStore["loadWords"]
}

export const NewLetterInput: React.FC<NewLetterInputProps> = ({ loadWords }) => {

    const [letter, setLetter] = useState('');

    const updateLetter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLetter(event.target.value.replace(/[^A-Za-z]/ig, ''))
        console.log(letter);
    }

    const onGetDataClick = () => {
        loadWords(letter)
        setLetter('')
    }

    useEffect(() => {
        console.log(letter);
    }, [letter])

    return (
        <div className="new-letter-container">
            <input
                placeholder="L"
                maxLength={1}
                value={letter}
                onChange={updateLetter}
                type="text"
                name="letter"
                onKeyPress={event => (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)}
                />

            <button onClick={onGetDataClick} disabled={!letter}>{letter ? 'Click here to get Data' : 'Type a letter in the box' }</button>
        </div>
    )
}
