import React from 'react'

const ListKey = () => {
    const persons = [
        {
        id:1,
        name:"Bruce",
        age:28,
        skill:"vule"
    },
    {
        id:2,
        name:"Brsuce",
        age:284,
        skill:"vdule"
    },
    {
        id:2,
        name:"llBruce",
        age:284,
        skill:"v4ule"
    }
    ]
    // const names = ['Bruce','Clark','Diana']
    const personList= persons.map((person,index) =><h2 key={index}>
    I am {person.name} I am {person.age}</h2>)
    return (

    <div>
{
    personList
}
    </div>
  )
}

export default ListKey