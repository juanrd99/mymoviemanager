import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../Cards/MovieCard/MovieCard'
import './Watched.css'
import '../Main/Main.css'


function Watched() {
    const { watched } = useContext(GlobalContext)

    return (
        <div className='main-container'>
            <h2 className='main-container-title'>Peliculas vistas</h2>
            {
                watched.length > 0 ? (
                    <div className="main-container-movies">
                        {
                            watched.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} type="watched" />
                            ))
                        }
                    </div>
                ) : (
                    <h3>Lista vacia</h3>
                )
            }

        </div>
    )
}

export default Watched