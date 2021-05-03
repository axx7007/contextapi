import React, {Children, createContext, useState} from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'
import Movie from './Movie'
 export const Kino = createContext();


const KinoProvider=({children})=>{
    const [data, setdata] = useState([
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
        <Kino.Provider value={[data, setdata]}>
            {children}
        </Kino.Provider>
    )
}
export default KinoProvider