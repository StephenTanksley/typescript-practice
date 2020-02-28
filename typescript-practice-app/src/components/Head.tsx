import React from 'react'


//we indicate the type of props inside this object.
type Props = {
    title: string; //required
    isActive  ?: boolean; //optional
};

//we're then able to destructure those props inside our parameters. We have to call from our Props object specifically.
export const Head = ({ title, isActive = true } : Props ) => {
    return (
        <div>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </div>
    )
}