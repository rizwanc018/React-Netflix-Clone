import { useEffect, useState } from 'react'
import axios from '../../axios'
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`)
            .then(response => {
                const rn = Math.floor(Math.random() * 21);
                setMovie(response.data.results[rn])
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div 
        style={{ backgroundImage: `linear-gradient(180deg, transparent, hsl(0, 0%, 0%)), url(${movie ? import.meta.env.VITE_IMAGE_URL + movie.backdrop_path : ""})`}}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner