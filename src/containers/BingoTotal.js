import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bingoWinnerCheck } from '../store/modules/bingo'

class BingoTotal extends Component {

    componentDidUpdate() {

        const { bingoWinnerCheck } = this.props

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
        total : bingo[type].bingo.length
    })
}

const mapDispatch = { bingoWinnerCheck }

export default connect(
    mapState,
    mapDispatch
)(BingoTotal)