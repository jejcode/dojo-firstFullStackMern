import React, { useState } from 'react'
const PersonForm = (props) => {
    const {initalFirstName, initialLastName, onSubmitProp} = props

    const [firstName, setFirstName] = useState(initalFirstName)
    const [lastName, setLastName] = useState(initialLastName)

    // handle the submmited form
    const onSubmitHandler = (e) => {
        // prevent default behavior
        e.preventDefault()
        onSubmitProp({firstName, lastName})
    }
    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange = { (e) => setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange = { (e) => setLastName(e.target.value) } value={lastName}/>
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm