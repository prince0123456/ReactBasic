import React from 'react'

const MovieList = () => {
    const movieList=[
        {
            id:1,
            name:"movie",
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
    const moveName=movieList.map((movie)=><ul><li>Movie {movie.name}</li></ul>)

    
  return (
    <div>{
      moveName
    }</div>
  )
}

export default MovieList