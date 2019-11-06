const getWinnerCheck = (p1, p2) => {

    const setMessage = bool => ( bool ? 'Player1' : 'Player2') + '이 빙고를 완성했습니다.'

    if (p1 > 4 && p2 > 4) {

        if (p1 === p2) return '무승부입니다'

        return setMessage(p1 > p2)

    }
    else if (p1 > 4 || p2 > 4) return setMessage(p1 > p2)
    else return ''

}

export default getWinnerCheck