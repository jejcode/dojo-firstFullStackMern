import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'
// import DisplayAll from '../components/DisplayAll'

const Main = (props) => {
    // const [people, setPeople] = useState([])
    const [personList, setPersonList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then( res => {
                setPersonList(res.data)
            })
            .catch( err => console.log(err))
    })

    const removeFromDom = personId => {
        // update: include both delete function and reset people list
        axios.delete(`http://localhost:8000/api/people/${personId}`)
            .then( res => {
                console.log(res.data)
                setPersonList(personList.filter(person => person._id !== personId))
            })
            .catch( err => console.log(err))
    }

    const createPerson = personParam => {
        axios.post('http://localhost:8000/api/people', personParam)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setPersonList(res.data, ...personList)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {/* <PersonForm people={people} setPeople={setPeople} /> */}
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr />
            {/* <PersonList people={people} setPeople={setPeople} removeFromDom={removeFromDom}/> */}
            <PersonList personList={personList} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main