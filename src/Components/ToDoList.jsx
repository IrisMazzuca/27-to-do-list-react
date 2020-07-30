import React, { useState } from 'react'
import InputTask from './InputTask';
import List from './List';
import Filters from './Filters';
import '../style.css';
import GithubLink from './GithubLink';

// Parent component 
const ToDoList = () => {
    // the list has all the tasks the user add. I added some tasks by default.
    const [list, setList] = useState([{ name: "👉 Ir al supermerado", isChecked: false }, { name: "👉 Ir a la farmacia", isChecked: true }, { name: "👉 Comprar regalos", isChecked: false }]);

    // filter will be used by List and Filters components. Its value can be null - true or false, and it will be use to filter the tasks according if they are checked (completed) or not.
    const [filter, setFilter] = useState(null);

    // I copied the original list and then I applied the filter, in order to be able to get the length of the filtered list (saving the value inside the variable "quantity"):
    const copiedList = [...list]

    const filteredList = copiedList.filter(item => {
        if (filter === null) return true;

        return item.isChecked === filter;
    });

    const quantity = filteredList.length;

    // onClick function addTask is sent as a prop to the InputTask component. By clicking the plusIcon, a new task is added and list value is updated.
    const addTask = (task) => {
        setList([...list, { name: task, isChecked: false }]);
    };

    // onClick function deleteTask is sent as a prop to the List component. By clicking the trashIcon, the task is deleted.
    const deleteTask = (task) => {
        setList(list.filter(item => item.name !== task))
    };

    // onChange function changeStatus is sent as a prop to the List component. It update the value of isChecked -> it the checkbox is checked, the value will be true, otherwise it will be false.
    const changeStatus = (item, event) => {
        const isChecked = (event.target.checked)
            ? item.isChecked = true
            : item.isChecked = false;

        //Here we get the index of the task where the event has taken place.
        const taskIndex = list.findIndex(task => task.name === item.name)
        const newList = [...list] //newList is a copy of list.
        newList[taskIndex].isChecked = isChecked //Here we change isChecked value (in newList)

        setList(newList) //list value updated with setList
    };

    return (
        <div className="container">
            <GithubLink />

            <InputTask list={list} action={addTask} />

            <List list={list} deleteAction={deleteTask} changeAction={changeStatus} filter={filter} />

            <Filters setFilter={setFilter} quantity={quantity} />
        </div>
    )
}

export default ToDoList
