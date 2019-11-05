import React, { Component } from 'react'

import { connect } from 'react-redux'

import { bingoCellPaint } from '../store/modules/bingo'
import { appPlayerFlag } from '../store/modules/app'

class BingoCell extends Component {

    handleClick = () => {

        const { bingoCellPaint, appPlayerFlag } = this.props 
        const { cell, paint } = this.props

        if (paint) return alert('이미 체크된 구역입니다.')

        bingoCellPaint(cell)
        appPlayerFlag()

    }

    render() {

        const { cell, paint } = this.props

        console.log('render')

        return (
            <td onClick={ this.handleClick } className={ paint ? 'paint': '' }>

                { cell }

            </td>
        )

    }

}

const mapState = ({ bingo }, { type, index }) => {

    return ({
        cell: bingo[type].cells[index],
        paint: bingo[type].paints[index]
    })
}

const mapDispatch = { bingoCellPaint, appPlayerFlag }

export default connect(
    mapState,
    mapDispatch
)(BingoCell)