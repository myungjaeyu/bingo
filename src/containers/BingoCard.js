import React, { Component } from 'react'

import { connect } from 'react-redux'

class BingoCard extends Component {

    render() {

        const { bingo } = this.props

        return (
            <p>
                { bingo }
            </p>
        )

    }

}

const mapState = ({ bingo }, { type, index }) => {

    return ({
        bingo : bingo[type].bingo[index]
    })
}

const mapDispatch = { }

export default connect(
    mapState,
    mapDispatch
)(BingoCard)