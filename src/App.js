import React, { Component } from 'react'
import './App.css'

import WinnerCard from './containers/WinnerCard'
import ControlButton from './containers/ControlButton'
import Bingo from './containers/Bingo'

class App extends Component {
    render() {
        return(
            <div className='App'>

                <WinnerCard />

                <ControlButton />

                <Bingo />

            </div>
        )
    }
}

export default App