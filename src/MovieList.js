import React, {useState} from 'react'

const MovieList=()=>{
    const [movie, setMovie] = useState([
        {id:1, name:'Harry Potter', price: '100$'},
        {id:2, name:'Mars', price: '200$'},
        {id:3, name:'Mr Been', price: '300$'},
        {id:4, name:'Janob Xechkim', price: '400$'},
        {id:5, name:'Uzbek kino', price: '500$'},
        {id:6, name:'Harry Potter 1', price: '600$'},
        {id:7, name:'Harry Potter 2', price: '700$'},
        {id:8, name:'Harry Potter 3', price: '800$'},
      ])
    return(
        <div>
            {movie.map((value, index)=>{
                return(
                    <div key={value.id}>
                    <h1>Kino nomi : {value.name}</h1>
                    <h1>Kino narxi : {value.price}</h1>
                    <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default MovieList