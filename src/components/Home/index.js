import {Component} from 'react'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import PopularMovieItem from '../PopularMovieItem'

import './index.css'

class Home extends Component {
  state = {
    isLoading: false,
    popularMovieDetails: [],
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    this.setState({isLoading: true})
    const apiKey = '1d1edd596bf5ce1f8b0e4a180f795333'
    const getPopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(getPopularMoviesURL)
    const data = await response.json()
    if (response.ok === true) {
      const movieDetails = data.results.map(eachMovie => ({
        posterPath: eachMovie.poster_path,
        title: eachMovie.title,
        id: eachMovie.id,
        voteAverage: eachMovie.vote_average,
      }))
      console.log(data)
      this.setState({
        popularMovieDetails: movieDetails,
        isLoading: false,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderPopularMovies = () => {
    const {popularMovieDetails} = this.state
    return (
      <ul className="popular-movie-container">
        {popularMovieDetails.map(eachMovie => (
          <PopularMovieItem popularMovieItem={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <NavBar />
        <div className="home-container">
          {isLoading ? this.renderLoader() : this.renderPopularMovies()}
        </div>
      </>
    )
  }
}

export default Home
