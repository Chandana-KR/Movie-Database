import {Link} from 'react-router-dom'
import './index.css'

const PopularMovieItem = props => {
  const {popularMovieItem} = props
  const {posterPath, title, voteAverage, id} = popularMovieItem

  const baseImageUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <li className="popular-movie-item">
      <img
        src={`${baseImageUrl}${posterPath}`}
        alt={title}
        className="popular-image"
      />
      <h1 className="title">{title}</h1>
      <p className="vote-average">{voteAverage}</p>
      <Link to={`/single-movie-details/${id}`}>
        <button type="button" className="view-button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default PopularMovieItem
