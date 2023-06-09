import { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [trailerId, setTrailerId] = useState('')

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  // options for react-youtube
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const showTrailer = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`)
      .then(response => {
        if (response.data.results.length){
          console.log(response.data.results);
          setTrailerId(response.data.results[0])
        }
        else console.log('>>>>>>>>>> No Results');
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='row' >
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          // eslint-disable-next-line react/jsx-key
          movies.map((movie) =>
            <img
              onClick={() => showTrailer(movie.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}`} alt="posters"
            />
          )
        }
      </div>
      {trailerId && <YouTube videoId={trailerId.key} opts={opts} />}
    </div >
  )
}

export default RowPost