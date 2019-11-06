import React from 'react'

import BingoScore from './BingoScore'
import BIngoTable from './BingoTable'

export default ({ type, control }) => {

    const handleClick = (e) => {

        if (!control) {

            e.stopPropagation()

            alert('잘못된 차례입니다.')

        }

    }

    return (
        <section onClickCapture={ handleClick }>

            <BingoScore type={ type } />

            <BIngoTable type={ type } rowSize={ 5 } cellSize={ 5 } />

        </section>
    )

}