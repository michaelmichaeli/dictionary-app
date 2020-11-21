import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import { NewLetterInput } from './NewLetterInput';
import { useRootStore } from './RootStateContext';
import img from './assets/img/eCommerceSiteSearch.png'

const App = observer(function App() {

    const { wordsStore } = useRootStore()

    //   console.log(wordsStore.words);

    return <div className="app-container">
        <nav>
            <p className="logo">⦿DictionaryApp</p>
            <ul>
                <li><p>About</p></li>
                <li><p>Resources</p></li>
                <li><p>Contact</p></li>
            </ul>
        </nav>
        <header>
            <section className="query-section">
                <div className="left">
                    <h4>Type in a letter to get to know more about it.</h4>
                    <p>This app was created with React and MobX. Insert an english letter to see how many time it's used in the dictionary, stats and more.</p>
                    <NewLetterInput loadWords={wordsStore.loadWords} />
                </div>
                <div className="right">
                    <img src={img} className="img" />
                </div>
            </section>
        </header>

        {wordsStore.words && <>
            <section className="data-section">
                <h2>Information about the letter {wordsStore.words.letter} from our dictionary</h2>
                <div className="data-container">
                    <div className="data-box">
                        <div className="data-box-header one">
                        </div>
                        <div className="data-box-content">
                            <h3>The letter {wordsStore.words.letter.toUpperCase()} stats</h3>
                            <p><span>{wordsStore.words.start}</span> words start with '{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.end}</span> words end with '{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.all}</span> words include '{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.repeat}</span> words include '{wordsStore.words.letter}{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.appear}</span> times '{wordsStore.words.letter}' appears in dictionary.</p>
                        </div>
                    </div>
                    <div className="data-box">
                        <div className="data-box-header two">
                        </div>
                        <div className="data-box-content">
                            <h3>The letter {wordsStore.words.letter.toUpperCase()} charts</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non molestias quam dolorum aperiam reprehenderit error cupiditate saepe rem, alias earum expedita nesciunt maiores minima dignissimos consequatur illo hic voluptatibus.</p>
                        </div>
                    </div>
                    <div className="data-box">
                        <div className="data-box-header three">
                        </div>
                        <div className="data-box-content">
                            <h3>More info about {wordsStore.words.letter.toUpperCase()}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non molestias quam dolorum aperiam reprehenderit error cupiditate saepe rem, alias earum expedita nesciunt maiores minima dignissimos consequatur illo hic voluptatibus.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>}
        <footer>
            <p>⦿DictionaryApp</p>
            <p>© CoffeeRights Michael Michaeli 2020</p>
            <p>Social Links</p>
        </footer>
    </div>
})

export default App;
