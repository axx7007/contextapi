import React, {useContext, useState} from 'react'
import Movie from '../src/Movie'
import {Kino} from './context'
const MovieList=()=>{
    const [data, setData] = useContext(Kino)
    // console.log(data)
    return(
        <div>
            {data.map((value, index)=>{
                return(
                    <Movie value={value} />
                )
            })}
        </div>
    )
}
export default MovieList