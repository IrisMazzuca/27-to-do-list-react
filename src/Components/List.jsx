import React from 'react'
import { FaTrash } from 'react-icons/fa';

const List = ({ list, action, changeAction, filter }) => {

    return (
        <div className="tasksContainer"  >
            {list.filter(item => {
                if (filter === null) return true;

                return item.status === filter;
            })
                .map((item, index) => {
                    return (
                        <div className="task" key={`item-${index}`} >
                            <span>
                                <input
                                    type="checkbox"
                                    onChange={(event) => changeAction(item, event)}
                                    key={`id-${index}`}
                                    className="checkbox"
                                />
                                <span style={item.status === "completo" ? { textDecoration: "line-through" } : null}>{item.name}</span>
                            </span>
                            <FaTrash title="Eliminar" onClick={() => action(item.name)} className="trashIcon" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
