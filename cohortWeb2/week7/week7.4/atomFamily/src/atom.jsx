import { atomFamily, selectorFamily } from 'recoil'
import { TODOS } from './todo.jsx'
import axios from 'axios'

// export const todoAtomFamily = atomFamily({
//     key: "todoAtomFamily",
//     default: (id) => {
//         return TODOS.find(x => x.id === id)
//     }
// })


export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily" ,
    default : selectorFamily({
        key : "todoSelectorFamily",
        get : (id) => async  ({get}) =>{
            const responce = await axios.get(`https://expresstodobackend.onrender.com/todos/${id}`)

            return responce.data
        }
    })
})