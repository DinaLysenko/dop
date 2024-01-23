import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './Students';
import {Button} from "./Button";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask(title, props.id)
        }
    }
    const onClickAllHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id)
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }
    const addTaskHandler = () => {
        props.addTask(title, props.id)
    }
    const onChangeMapHandler = (e: ChangeEvent<HTMLInputElement>, taskId: string) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(taskId, newIsDoneValue, props.id);
    }
    const onClickMapHandler = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }


    return <div>
        <h3> {props.title}
            <Button name={'X'} onClick={removeTodolistHandler}/>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button name={'+'} onClick={addTaskHandler}/>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={(e) => onChangeMapHandler(e, t.taskId)} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'+'} onClick={() => onClickMapHandler(t.taskId)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'All'} onClick={() => {
                onClickAllHandler('all')
            }}/>
            <Button name={'Active'} onClick={() => {
                onClickAllHandler('active')
            }}/>
            <Button name={'Completed'} onClick={() => {
                onClickAllHandler('completed')
            }}/>
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


