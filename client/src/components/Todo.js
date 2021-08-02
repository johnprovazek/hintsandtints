import React from 'react'

export default function Todo({todo}) {
    console.log(todo)
    return(
        <div>
            <h1>{todo.title}</h1>
        </div>
    );
}