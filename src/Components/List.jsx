import React from 'react'
import { FaTrash } from 'react-icons/fa';

const List = ({ list, deleteAction, changeAction, filter }) => {

    const filteredList =
        // the list is filtered according to whether the tasks are completed(checked) or not, then the list is rendered.
        // if the task is checked, a text decoration line-through is added to the style.
        list.filter(item => {
            if (filter === null) return true;

            return item.isChecked === filter;
        })
            .map((item, index) => {
                return (
                    <div className="task" key={`item-${index}`} >
                        <span>
                            <input
                                type="checkbox"
                                checked={item.isChecked}
                                onChange={(event) => changeAction(item, event)}
                                key={`id-${index}`}
                                className="checkbox"
                            />
                            <span style={(item.isChecked)
                                ? { textDecoration: "line-through" }
                                : { textDecoration: "none" }}>
                                {item.name}
                            </span>
                        </span>
                        <FaTrash title="Eliminar" onClick={() => deleteAction(item.name)} className="trashIcon" />
                    </div>
                )
            });

    return (
        <div className="tasksContainer"  >
            {filteredList}
        </div>
    )
}

export default List
