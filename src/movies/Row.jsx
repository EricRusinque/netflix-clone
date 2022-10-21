import './row.css'

import { Poster } from './Poster';


const baseUrl = 'https://image.tmdb.org/t/p/original';


export const Row = ({ title, movies, isLargeRow }) => {
    
    
    
    return (
        <div className='row'>
            <h2>{ title }</h2>
            <div className='row__posters'>
                {
                    movies.map( movie => {
                         return (<Poster isLargeRow={ isLargeRow } key={movie.id} {...movie}/>)
                    })
                }
            </div>
        </div>
     
    )
}
