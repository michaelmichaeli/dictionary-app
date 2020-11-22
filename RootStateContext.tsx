import React from 'react'
import { WordsStore } from './WordsStore'

type RootStateContextValue = {
    wordsStore: WordsStore
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)

const wordsStore = new WordsStore()

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <RootStateContext.Provider value={{ wordsStore }}>
            {children}
        </RootStateContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStateContext)