import React from 'react';
import './App.css';
import Slider from './component/slider'
const title = "Slideshow App";

function App({slides}) {
    return (
        <div>
            <div className="App">
                <Slider slides={slides} />
            </div>
        </div>
    );
}

export default App;
