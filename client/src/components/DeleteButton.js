import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const {personId, successfullCallback} = props
    const deletePerson = (e) => {
        axios.delete(`http://localhost:8000/api/people/${personId}`)
            .then(res => successfullCallback())
    }

    return (
        <button className="btn btn-outline-danger btn-sm" onClick={deletePerson}>Delete</button>
    )
}

export default DeleteButton