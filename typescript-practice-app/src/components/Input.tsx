import React, { useState, useRef } from 'react' // useRef allows you to reference a specific DOM element.

export const Input = () => {
    const [name, setName ] = useState('') // This is inference typing in useState.
    // const [name, setName ] = useState<string>("") //This is the most strict form of typing for useState. This is explicit typing. Chances are we don't need this.
    // const [name, setName ] = useState<string | null>(null) //TypeScript will look at the types inherent with inputs to infer typing. If we put a 0 in useState, it would throw an error.

    // const ref = useRef<HTMLInputElement>(null!/* the ! in this field means that this will be read-only. No overwriting of the ref value. */)
    const ref = useRef<HTMLInputElement>(null) //this is not read-only. This means it can be modified through the ref. Not terribly common.

    // console.log('ref', ref?.current?.value); // this is normally available. Create React App doesn't like optional chaining yet. 
    // console.log('ref', ref.current.value);

    return <input ref={ref} value={name} onChange = {e => setName(e.target.value)} />
}