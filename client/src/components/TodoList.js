import React, { useState, useEffect } from "react";
import firebase from "../util/firebase";
import Todo from './Todo';

export default function TodoList(){
    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = firebase.database().ref('TintsAndHints')
        todoRef.on("value",(snapshot) => {
            // console.log(snapshot.val());
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos){
                todoList.push(todos[id]);
            }
            console.log(todoList);
            setTodoList(todoList);
        });
    },[])

    return(
        <div>
            {todoList 
                ? todoList.map((todo,index) => <Todo todo={todo} key={index}/>)
                : ''}
        </div>
    )
}