import { observable, action, makeObservable } from 'mobx'
import { getWordsStartCount, getWordsEndCount, getAppearCount, getRepeatCount, getAllWordsCount } from './api'

export class WordsStore {
    @observable words: any

    /* THIS WAS WHAT WAS MISSING */
    constructor() {
        makeObservable(this)
    }
    /* END OF MISSING STUFF */

    @action
    loadWords = async(letter: string) => {
        if (!letter) return;

        const startCount = await getWordsStartCount(letter)
        const endCount = await getWordsEndCount(letter)
        const appearCount = await getAppearCount(letter)
        const repeatCount = await getRepeatCount(letter)
        const allCount = await getAllWordsCount(letter)

        this.words = { start:startCount, end:endCount, appear:appearCount, repeat:repeatCount, all:allCount, letter }
        // this.words = { startCount, endCount, appearCount }

    }

}

