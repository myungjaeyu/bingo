import React from 'react'

import BingoCell from '../containers/BingoCell'

const renderCells = (type, rowSize, cellSize) => {

    let tick = 0
    const rows = []

    for (let i = rowSize; i--;) rows.push(<tr key={ i }>{ (() => {

        const cells = []

        for (let i = cellSize; i--;) {

            cells.push(<BingoCell key={ i } type={ type } index={ tick } />)

            tick++

        }

        return cells

    })() }</tr>)

    return rows

}

export default ({ type, rowSize, cellSize }) => {

    return (
        <table>

            <tbody>

                { renderCells(type, +rowSize, +cellSize) }

            </tbody>

        </table>
    )
}