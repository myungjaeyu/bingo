import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bingoClear } from '../store/modules/bingo'
import { appClear } from '../store/modules/app'

class WinnerCard extends Component {

    handleClick = () => {

        const { bingoClear, appClear } = this.props
        const { winner } = this.props

        if (winner) {

            bingoClear()
            appClear()

        }

    }

    render() {

        const { winner } = this.props

        return (
            winner &&
            <div>

                <strong>{ winner }</strong>

                <button onClick={ this.handleClick }>확인</button>

            </div>
        )

    }

}

const mapState = ({ bingo: { winner } }) => {

    return ({
        winner
    })
}

const mapDispatch = { bingoClear, appClear }

export default connect(
    mapState,
    mapDispatch
)(WinnerCard)