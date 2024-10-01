import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
  <nav className="nav-bar-container">
    <Link to="/" className="link">
      <h1>movieDB</h1>
    </Link>
    <div>
      <input type="search" className="search-input" />
      <button type="button" className="search-button">
        Search
      </button>
    </div>
    <ul className="bottons-container">
      <Link to="/" className="link">
        <button type="button" className="nav-button">
          <li>Popular</li>
        </button>
      </Link>
      <Link to="/top-rated" className="link">
        <button type="button" className="nav-button">
          <li>Top Rated</li>
        </button>
      </Link>
      <Link to="/upcoming" className="link">
        <button type="button" className="nav-button">
          <li>Upcoming</li>
        </button>
      </Link>
    </ul>
  </nav>
)

export default NavBar
