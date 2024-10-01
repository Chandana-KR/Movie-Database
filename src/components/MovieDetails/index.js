import './index.css'

const MovieDetails = props => {
  const {movieDetails} = props
  const {posterPath, title, rating, duration, releaseDate} = movieDetails
  const {overview, genre} = movieDetails
  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="movie-item">
      <img
        src={`${baseUrl}${posterPath}`}
        alt={title}
        className="poster-image"
      />
      <div>
        <h1>{title}</h1>
        <p>{rating}</p>
        <p>{duration}</p>
        <p>{releaseDate}</p>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails
