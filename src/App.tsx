import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { NewLetterInput } from './NewLetterInput';
import { useRootStore } from './RootStateContext';
import { PieChart } from 'react-minimal-pie-chart';
import './App.css';

import img from './assets/img/eCommerceSiteSearch.png'
import calcIcon from './assets/img/keys.svg'
import chartIcon from './assets/img/pie-chart.svg'
import infoIcon from './assets/img/info.svg'
import twitterIcon from './assets/img/twitter.svg'
import facebookIcon from './assets/img/facebook.svg'
import instagramIcon from './assets/img/instagram.svg'

const App = observer(function App() {

    const { wordsStore } = useRootStore()

    const [open, setOpen] = useState(false);

    return <div className="app-container">
        <nav>
            <p className="logo">DictionaryApp</p>
            <ul>
                <li onClick={()=>setOpen(true)}><p>About</p></li>
                <li onClick={()=>setOpen(true)}><p>Resources</p></li>
                <li onClick={()=>setOpen(true)}><p>Contact</p></li>
            </ul>
        </nav>
        <header>
            <section className="query-section">
                <div className="left">
                    <h4>Type in a letter to get to know more about it.</h4>
                    <p>This app was created using React and MobX. Insert an english letter to see how many time it's used in the dictionary, stats and more.</p>
                    <NewLetterInput loadWords={wordsStore.loadWords} />
                </div>
                <div className="right">
                    <img src={img} className="img" alt="" />
                </div>
            </section>
        </header>

        {wordsStore.words && <>
            <section className="data-section">
                <h2>Information about the letter {wordsStore.words.letter} from our dictionary</h2>
                <div className="data-container">
                    <div className="data-box">
                        <div className="data-box-header one">
                            <img src={calcIcon} className="icon" alt="" />
                        </div>
                        <div className="data-box-content">
                            <h3>{wordsStore.words.letter.toUpperCase()} STATS</h3>
                            <p><span>{wordsStore.words.start}</span> words start with '{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.end}</span> words end with '{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.all}</span> words include '{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.repeat}</span> words include '{wordsStore.words.letter}{wordsStore.words.letter}'.</p>
                            <p><span>{wordsStore.words.appear}</span> times '{wordsStore.words.letter}' appears in dictionary.</p>
                        </div>
                    </div>
                    <div className="data-box">
                        <div className="data-box-header two">
                            <img src={chartIcon} className="icon" alt="" />
                        </div>
                        <div className="data-box-content">
                            <h3>{wordsStore.words.letter.toUpperCase()} CHARTS</h3>
                            <PieChart
                                animate
                                animationDuration={2000}
                                animationEasing={'ease-in'}
                                label={({ dataEntry }) => dataEntry.value}
                                labelStyle={{ fontSize: '5px' }}
                                data={[
                                    { title: `Words start with ${wordsStore.words.letter}`, value: wordsStore.words.start, color: '#cab0eb' },
                                    { title: `Words end with ${wordsStore.words.letter}`, value: wordsStore.words.end, color: '#b0cef5' },
                                    { title: `Words include ${wordsStore.words.letter}`, value: wordsStore.words.all, color: '#eddff9' },
                                ]}
                            />;
                        </div>
                    </div>
                    <div className="data-box">
                        <div className="data-box-header three">
                            <img src={infoIcon} className="icon" alt="" />
                        </div>
                        <div className="data-box-content">
                            <h3>MORE INFO ABOUT {wordsStore.words.letter.toUpperCase()}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non molestias quam dolorum aperiam reprehenderit error cupiditate saepe rem, alias earum expedita nesciunt maiores minima dignissimos consequatur illo hic voluptatibus.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>}
        <footer>
            <p>DictionaryApp</p>
            <p>© CoffeeRights Michael Michaeli 2020</p>
            <div>
                <img src={facebookIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={instagramIcon} alt="" />
            </div>
        </footer>
    </div>
})

export default App;
