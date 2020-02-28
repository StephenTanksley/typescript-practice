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

export const Button = ({ onClick } : Props) => {
    return <button onClick={onClick}>Click Me</button>
} 