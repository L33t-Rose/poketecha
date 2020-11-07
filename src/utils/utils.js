const moveSchema = {
    name: '',
    id: '',
    pow: '',
    accuracy: '',
    type: '',
    description: '',
    pp: ''
}

const monSchema = {
    name: '',
    ability: '',
    moves: [
        moveSchema,
        moveSchema,
        moveSchema,
        moveSchema
    ]
}

export const teamSchema = () => {
    return {
        name: '',
        mons: [
            monSchema,
            monSchema,
            monSchema,
            monSchema,
            monSchema,
            monSchema,
        ]
    }
}

