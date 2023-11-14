import './index.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="nav-container">
    <h1 className="title">movieDB</h1>

    <div className="search-container">
      <input type="search" className="input" placeholder="search" />
      <button type="button" className="search-button">
        <AiOutlineSearch size={25} />
      </button>
    </div>

    <ul className="routes-container">
      <Link to="/" className="link-component">
        <li>
          <p>Popular</p>
        </li>
      </Link>
      <Link to="/top-rated" className="link-component">
        <li>
          <p>Top Rated</p>
        </li>
      </Link>
      <Link to="/upcoming" className="link-component">
        <li>
          <p>Upcoming</p>
        </li>
      </Link>
    </ul>
  </div>
)

export default Navbar
