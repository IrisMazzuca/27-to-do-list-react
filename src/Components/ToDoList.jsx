import React, { useState } from 'react'
import InputTask from './InputTask';
import List from './List';
import Filters from './Filters';
import '../style.css';
import GithubLink from './GithubLink';


const ToDoList = () => {

    const [list, setList] = useState([{ name: "👉 Ir al supermerado", status: 'incompleto' }, { name: "👉 Ir a la farmacia", status: 'completo' }, { name: "👉 Comprar regalos", status: 'incompleto' }]);
    const [filter, setFilter] = useState(null);

    const addTask = (task) => {
        setList([...list, { name: task, status: 'incompleto' }]);
    };

    const deleteTask = (task) => {
        setList(list.filter(item => item.name !== task))
    };

    const changeStatus = (item, event) => {
        const status = (event.target.checked)
            ? item.status = 'completo'
            : item.status = 'incompleto';

        const taskIndex = list.findIndex(task => task.name === item.name)
        const newList = [...list]
        newList[taskIndex].status = status

        setList(newList)
    };

    const quantity = list.length;

    return (
        <div className="container">
            <GithubLink />

            <InputTask list={list} action={addTask} />

            <List list={list} action={deleteTask} changeAction={changeStatus} filter={filter} />

            <Filters setFilter={setFilter} quantity={quantity} />
        </div>
    )
}

export default ToDoList
