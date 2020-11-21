import words from './db.json'

// Number of words with letter
export const getAllWordsCount = async (letter: string) => {
    const letterLow = letter.toLowerCase()
    return await words.filter(word => word.includes(letterLow)).length;
}

export const getWordsStartCount = async (letter: string) => {
    const letterLow = letter.toLowerCase()
    return await words.filter(word => word.charAt(0) === letterLow).length;
}

export const getWordsEndCount = async (letter: string) => {
    const letterLow = letter.toLowerCase()
    const result = await words.filter(word => word.slice(-1) === letterLow).length;
    return result
}

// Number of Times letter appears in total
export const getAppearCount = async (letter: string) => {
    const letterLow = letter.toLowerCase()
    return await words.join('').split('').filter(l => l === letterLow).length
}

export const getRepeatCount = async (letter: string) => {
    const letterLow = letter.toLowerCase()
    return await words.filter(word => word.includes(letterLow + letterLow)).length;
}
