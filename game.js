const right = 1, left = 2, up = 3, down = 4

function findZero(state)
{
    for(let l = 0; l < 3; l++)
    {
        for(let k = 0; k < 3; k++)
            if(state[l][k] === 0)
                return [l, k]
    }
}

function actions(state, action)
{

    const [i, j] = findZero(state)
    if (i === 0 && j === 0)
    return [up, right ]
}