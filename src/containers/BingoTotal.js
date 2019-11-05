import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bingoWinnerCheck, bingoClear } from '../store/modules/bingo'
import { appClear } from '../store/modules/app'

class BingoTotal extends Component {

    componentDidUpdate() {

        const { bingoWinnerCheck, bingoClear, appClear } = this.props
        const { winner } = this.props

        if (winner) {

            alert(winner)

            bingoClear()
            appClear()

        }

        bingoWinnerCheck()

    }

    render() {

        const { total } = this.props

        return (
            <div>

                <h4>

                    { total }

                </h4>

            </div>
        )

    }

}

const mapState = ({ bingo }, { type }) => {

    return ({
        winner: bingo.winner,
        total : bingo[type].bingo.length
    })
}

const mapDispatch = { bingoWinnerCheck, bingoClear, appClear }

export default connect(
    mapState,
    mapDispatch
)(BingoTotal)