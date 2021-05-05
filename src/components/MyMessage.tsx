
import React from "react";

interface Props {
    message?: string; 
    age?: number; // different variables and their types; ? means that you don't have to define this property every time you call that component
}

export default function MyMessage({ message, age }: Props) {
    return <div>{message} {age}</div>
}