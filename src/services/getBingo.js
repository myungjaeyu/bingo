const getBingo = (player, cell) => {

    const size = 5
    const result = []

    const { cells, paints } = player

    for (let index = 0; index < (size * size); index++) {

        if (cells[index] === cell) {

            const quot = Math.floor(index / size)
            const remain  = index % size


            let flag = true
            for (let i = 0; i < size; i++) if (!paints[quot * size + i]) flag = false
            if (flag) result.push(`Row ${ quot + 1 }`)


            flag = true
            for (let i = 0; i < size; i++) if (!paints[i * size + remain]) flag = false
            if (flag) result.push(`Column ${ remain + 1 }`)


            flag = false
            if (quot === remain) {

                flag = true
                for(let i = 0; i < size; i++) if (!paints[i * size + i]) flag = false

            }
            if (flag) result.push('Line \\')


            flag = false
            if (index % (size - 1) === 0 && index !== 0 && index !== size*size-1) {

                flag = true
                for(let i = 1; i <=size; i++) if (!paints[i * (size - 1)]) flag = false

            }
            if (flag) result.push('Line /')

        }

    }

    return result

}

export default getBingo