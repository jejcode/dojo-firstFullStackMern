import React, { useState } from 'react'
import axios from 'axios'
const PersonForm = () => {
    // const [ message, setMessage ] = useState('Loading...')
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //         .then(res => setMessage(res.data.message))
    //         .catch(err => console.log(err))
    // }, [])
    // keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    // handle the submmited form
    const onSubmitHandler = (e) => {
        // prevent default behavior
        e.preventDefault()
        // make post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,  // no need to type firstname: firstname
            lastName
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange = { (e) => setFirstName(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange = { (e) => setLastName(e.target.value) }/>
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm