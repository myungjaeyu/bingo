import React, { Component } from 'react'

import { connect } from 'react-redux'

class BingoTotal extends Component {

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

const mapDispatch = { }

export default connect(
    mapState,
    mapDispatch
)(BingoTotal)