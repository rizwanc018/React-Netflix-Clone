import { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        setMovies(response.data.results)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          // eslint-disable-next-line react/jsx-key
          movies.map((movie) => <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}`} alt="posters" />

          )
        }
      </div>
    </div>
  )
}

export default RowPost