import {TODORACTION} from './Todo-Action'

export function TodoReducer(state, action)
{
    switch(action.type)
    {
        case TODORACTION.ADD_TODO:
            return {...state,todos:[...state.todos, action.payload]}
        default:
            return state
    }
}
