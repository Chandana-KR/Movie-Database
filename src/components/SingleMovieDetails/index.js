import {Component} from 'react'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import MovieDetails from '../MovieDetails'

import './index.css'

class SingleMovieDetails extends Component {
  state = {
    inProgress: true,
    movieDetails: {},
    castDetails: [],
  }

  componentDidMount() {
    this.getmovieDetails()
    this.getCastDetails()
  }

  getmovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = '1d1edd596bf5ce1f8b0e4a180f795333'
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const response = await fetch(singleMovieUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        posterPath: data.poster_path,
        title: data.title,
        id: data.id,
        overview: data.overview,
        releaseDate: data.release_date,
        genre: data.genre,
        voteAverage: data.vote_average,
        runtime: data.runtime,
      }
      this.setState({movieDetails: updatedData, inProgress: false})
    }
  }

  getCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = '1d1edd596bf5ce1f8b0e4a180f795333'
    const singleCastUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    const response = await fetch(singleCastUrl)
    const data = await response.json()
    if (response.ok === true) {
      const updatedCastDetails = data.cast.map(eachCast => ({
        name: eachCast.name,
        id: eachCast.id,
        profilePath: eachCast.profile_path,
        character: eachCast.character,
      }))
      this.setState({castDetails: updatedCastDetails, inProgress: false})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {movieDetails, inProgress} = this.state
    return (
      <>
        <NavBar />
        {inProgress ? (
          this.renderLoader()
        ) : (
          <div className="single-movie-container">
            <MovieDetails movieDetails={movieDetails} />
          </div>
        )}
      </>
    )
  }
}

export default SingleMovieDetails
