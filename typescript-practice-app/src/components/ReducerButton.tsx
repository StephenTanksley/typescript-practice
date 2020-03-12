import React, { useReducer } from 'react'

const initialState = { 
    reducerValue : false 
}

type State = {
    reducerValue: boolean
}

// type Action = {
//     type: "one" | "two";
// }

// type Action = { type: "one" } | { type:  "two" }
type Action = 
    | { type: "one" } 
    | { type:  "two" }
    | { type:  "three" }
    | { type:  "four" }


const reducer = (state: State, action: Action) => {
    switch (action.type){
        case 'one':
            return { reducerValue: true}
        case 'two':
            return { reducerValue: false}
        default: 
            return state
    }
}

export const ReducerButton = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {state && state.reducerValue && <h1>Visible</h1>}
            <button onClick={() => dispatch({ type: "one"})}>Action One</button>
            <button onClick={() => dispatch({ type: "two"})}>Action Two</button>
         </div>
    )
}