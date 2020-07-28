import React from 'react'
import { BsList } from 'react-icons/bs'

const Filters = ({ setFilter, quantity }) => {

    return (
        <div className="filtersContainer">
            <span><sup>{quantity}</sup></span><BsList />
            <button
                className="filterBtn filterBtn--blue"
                onClick={() => setFilter(null)}
            >
                Todas
            </button>
            <button
                className="filterBtn filterBtn--red"
                onClick={() => {
                    setFilter("incompleto")
                }}
            >
                Incompletas
            </button>
            <button
                className="filterBtn filterBtn--green"
                onClick={() => {
                    setFilter("completo")
                }}
            >
                Completas
            </button>
        </div>
    )
}

export default Filters
