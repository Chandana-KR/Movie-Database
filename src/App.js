import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SingleMovieDetails from './components/SingleMovieDetails'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route
      exact
      path="/single-movie-details/:id"
      component={SingleMovieDetails}
    />
  </Switch>
)
export default App
