import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

import BingoBoard from '../components/BingoBoard'

class Bingo extends Component {

    render() {

        const { flag } = this.props

        return (
            <Fragment>

                <BingoBoard type='player1' control={ !flag } />

                <BingoBoard type='player2' control={ flag } />

            </Fragment>
        )

    }

}

const mapState = ({ app: { flag } }) => ({ flag })

const mapDispatch = { }

export default connect(
    mapState,
    mapDispatch
)(Bingo)