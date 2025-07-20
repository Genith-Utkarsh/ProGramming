import { atomFamily } from 'recoil'
import { TODOS } from './todo.jsx'

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: (id) => {
        return TODOS.find(x => x.id === id)
    }
})