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



//make a branch off of staging
//staging will get an update, but I can rebase.
//don't update App.tsx - 