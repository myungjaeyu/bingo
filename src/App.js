import React, { Component } from 'react'
import './App.css'

import WinnerCard from './containers/WinnerCard'
import ControlButton from './containers/ControlButton'
import BingoBoard from './components/BingoBoard'

class App extends Component {
    render() {
        return(
            <div className='App'>

                <WinnerCard />

                <ControlButton />

                <BingoBoard type='player1' />

                <BingoBoard type='player2' />

            </div>
        )
    }
}

export default App