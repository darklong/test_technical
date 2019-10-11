import { DO_SOME_THING } from '../actions/types'

const someThing = (state = {data: ''},action) => {
    switch(action.type) {
        case DO_SOME_THING: 
            return { ...state, data: action.data}
        default:
                return state
    }
}

export default someThing