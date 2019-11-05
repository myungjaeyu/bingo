import React from 'react'

import BingoCard from '../containers/BingoCard'
import BingoTotal from '../containers/BingoTotal'

export default ({ type }) => (
    <article>

        {
            (() => {

                const cards = []

                for (let i = 0; i < 5; i++) cards.push(<BingoCard key={ i } type={ type } index={ i } />)

                return cards

            })()
        }

        <BingoTotal type={ type } />

    </article>
)