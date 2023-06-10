import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import PersonForm from "./PersonForm";
import DeleteButton from "./DeleteButton";

const Update = (props) => {
    const {id} = useParams()

    const [person, setPerson] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                setPerson(res.data)
                setLoaded(true)
            })
            .catch( err => console.log(err))
    }, [])

    const updatePerson = (person) => {
        // e.preventDefault()
        axios.patch(`http://localhost:8000/api/people/${id}`, person)
            .then( res => {
                console.log(res)
                // navigate('/home')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm onSubmit={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName}/>
                    <DeleteButton personId={person._id} successCallback={() => navigate('/')}/>
                </>
            )
            }
        </div>
    )
}

export default Update