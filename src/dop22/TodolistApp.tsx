import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {useEffect, useState} from 'react';

type ObjectType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
type TodosType = ObjectType & {
    todolistId: string
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';


function TodolistApp() {
    const [todos, setTodos] = useState<TodosType[]>([])

    const todoFromServer: ObjectType[] = [
        {
            title: 'What to learn',
            filter: 'all',
            tasks: [
                {taskId: v1(), title: 'HTML&CSS', isDone: true},
                {taskId: v1(), title: 'JS', isDone: true}
            ],
            students: [
                'Rick Kane',
                'Finnlay Bentley',
                'Samia North',
                'Isaac Morton',
                'Lily-Ann Clifford',
                'Thalia Park',
                'Sapphire Cruz',
                'Cieran Vazquez',
                'Anya Estes',
                'Dominika Field',
                'Rosanna Chung',
                'Safiyah Davey',
                'Ryley Beasley',
                'Kalvin Trejo',
                'Evie-Mae Farrell',
                'Juliet Valencia',
                'Astrid Austin',
                'Lyle Montgomery',
                'Nisha Mora',
                'Kylie Callaghan',
                'Star Wilks',
                'Marissa Colley',
                'Asa Fuller',
                'Leigh Kemp',
                'Avleen Dawson',
                'Sammy Bonilla',
                'Acacia Becker',
                'Coral Shepherd',
                'Melina Molina',
                'Kiran Bailey',
                'Clara Escobar',
                'Alexandru Horn',
                'Brandon-Lee Mercado',
                'Elouise Weston',
                'King Long',
                'Kerri Searle',
                'Kanye Hamer',
                'Elwood Benitez',
                'Mikail Whitaker',
                'Bobby Hardy',
                'Talha Ferry',
                'Priscilla Landry',
                'Olivia-Grace Cain',
                'Kiaan Wallace',
                'Wesley Padilla90',
                'Ella-Grace Wooten91',
                'Kaif Molloy92',
                'Kamal Broadhurst93',
                'Bianca Ferrell94',
                'Micheal Talbot95',
            ]
        },
        {
            title: 'What to do',
            filter: 'all',
            tasks: [
                {taskId: v1(), title: 'HTML&CSS2', isDone: true},
                {taskId: v1(), title: 'JS2', isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Orion Lamb13',
                'Faizah Huynh14',
                'Crystal Vaughan15',
                'Vivien Hickman16',
                'Stuart Lu17',
                'Karol Davison18',
                'Dario Burns19',
                'Chloe Rich20',
                'Martyna Felix',
                'Nida Glass',
                'Maeve Miles',
                'Hasnain Puckett',
                'Ayman Cano',
                'Safwan Perry',
                'Fox Kelly',
                'Louise Barlow',
                'Malaki Mcgill',
                'Leanna Cline',
                'Willard Hodge',
                'Amelia Dorsey',
                'Kiah Porter',
                'Jeanne Daly',
                'Mohsin Armstrong',
                'Laurie Rangel',
                'Princess Tierney',
                'Kasim Kendall',
                'Darryl Cope',
                'Elysha Ray',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert',
            ]
        }
    ]

    useEffect(() => {
        setTodos(todoFromServer.map(t => ({...t, todolistId: v1()})))
    }, []);


    function removeTask(id: string, todolistId: string) {
        setTodos(todos.map(t => t.todolistId === todolistId ? {...t, tasks: t.tasks.filter(t => t.taskId === id)} : t))
    }

    function addTask(title: string, todolistId: string) {
        let newTask = {taskId: v1(), title: title, isDone: false}
        setTodos(todos.map(t => t.todolistId === todolistId ? {...t, tasks: [...t.tasks, newTask]} : t))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        setTodos(todos.map(t => t.todolistId === todolistId ? {
            ...t,
            tasks: t.tasks.map(t => t.taskId === id ? {...t, isDone: isDone} : t)
        } : t))

    }


function changeFilter(value: FilterValuesType, todolistId: string) {
   setTodos(todos.map(t=>t.todolistId===todolistId? {...t, filter: value}:t))
}

function removeTodolist(id: string) {
   setTodos(todos.filter(t=>t.todolistId!=id))
}

return (
    <div className="App">
        {
            todos.map(tl => {

                let tasksForTodolist = tl.tasks;

                if (tl.filter === 'active') {
                    tasksForTodolist = tl.tasks.filter(t => t.isDone === false);
                }
                if (tl.filter === 'completed') {
                    tasksForTodolist = tl.tasks.filter(t => t.isDone === true);
                }

                return <Todolist
                    key={tl.todolistId}
                    id={tl.todolistId}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                />
            })
        }

    </div>
);
}

export default TodolistApp;
