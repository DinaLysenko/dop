import React, {useEffect, useRef, useState} from 'react';
import {ButtonFetch} from "./ButtonFetch";
import {Button} from "../dop-2/Button";
import {Input} from "./Input";


type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export function FetchFoo() {
    const [todos, setTodos] = useState<TodosType[]>([])
    //const [newTitle, setNewTitle] = useState('')
    const newTitle = useRef<HTMLInputElement | null>(null)
    const foo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    const onShowHandler = () => {
        foo()
    }
    const onHideHandler = () => {
        setTodos([])
    }
    const onClickHandler = () => {
        if (newTitle.current) {
            const newTodo: TodosType =
                {userId: 10, id: todos.length + 1, title: newTitle.current?.value, completed: false}
            setTodos([newTodo, ...todos])
            newTitle.current.value = ''
        }
                //setNewTitle('')
    }
    return (
        <div className="App">
            <div>
                <ButtonFetch onClick={onShowHandler} name={'Show Me'}/>
                <ButtonFetch onClick={onHideHandler} name={'Hide Me'}/>
            </div>
            <ul>
                <div>
                    <Input newTitle={newTitle}
                           //setNewTitle={setNewTitle}
                    />
                    <Button name={'+'} onClick={onClickHandler}/>
                </div>
                {todos.map(t => {
                    return (
                        <li key={t.id}>
                            <span>{t.id}</span>-
                            <span>{t.userId}</span>-
                            <span>{t.title}</span>
                            <input type='checkbox' checked={t.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}



