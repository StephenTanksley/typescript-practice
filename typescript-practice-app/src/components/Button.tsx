import React from 'react'

type Props = {
  // onClick(): string; method returns string
  // onClick(): void; //void means  we're doing something in this function, but returns nothing.
  // onClick(text: string): void; // method with params
  // onClick: () => void; // function returns nothing.
  // onClick: (text: string) => void; //function with params.
  // onClick: (e: React.MouseEvent) => void; // basic mouse event.
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void; // basic input event.
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // A very specific button click event.
}



export const Button: React.FC<Props> = ({ onClick, children }) => { // if we're not always sure of what the children will be, use this syntax.
// export const Button = ({ onClick, children} : Props) => { // if we're ALWAYS sure of what the children will be, use this syntax.
  
  return <button onClick={onClick}>Click Me</button>
} 