import React from 'react'

const MovieTable = () => {

    const movieList=[
        {
            id:1,
            name:"movie",
            age:28,
            skill:"vule"
        },
        {
            id:2,
            name:"Brsffuce",
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
  return (
    <>
       {
        movieList.map(e=>{
            return(
                <>
            <tr>
            <td>{e.id}</td><hr></hr>
            <td>{e.age}</td>
            <td>{e.name}</td>
            </tr>
            </>
            )
        })
       }

       </>
  )
}

export default MovieTable