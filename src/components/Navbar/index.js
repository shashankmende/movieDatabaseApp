import './index.css'
import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoIosMenu, IoMdClose} from 'react-icons/io'

class Navbar extends Component {
  state = {movieName: '', expand: false}

  onChangeMovieName = event => {
    this.setState({
      movieName: event.target.value,
    })
  }

  menu = () => (
    <Popup trigger={<IoIosMenu />} modal position="bottom center">
      {close => (
        <div className="popup-container">
          <button type="button" className="close" onClick={close}>
            <IoMdClose />
          </button>
          <ul className="min-devices">
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
      )}
    </Popup>
  )

  onClickButton = () => {
    const {expand} = this.state
    this.setState({
      expand: !expand,
    })
  }

  renderSearchBar = () => {
    const {movieName} = this.state
    return (
      <div className="search-container">
        <input
          type="search"
          className="input"
          value={movieName}
          placeholder="Search"
          onChange={this.onChangeMovieName}
        />
        <Link to={`/searchMovies/${movieName}`}>
          <button
            type="button"
            className="search-button"
            onClick={this.onClickButton}
          >
            <AiOutlineSearch size={25} />
          </button>
        </Link>
      </div>
    )
  }

  render() {
    const {movieName, expand} = this.state

    return (
      <div>
        <div className="nav-container">
          <h1 className="title">movieDB</h1>
          <div className="large-screen-search">{this.renderSearchBar()}</div>
          <button
            type="button"
            className="search-button small-screen-button"
            onClick={this.onClickButton}
          >
            <AiOutlineSearch size={25} />
          </button>

          <div className="small-devices">
            {this.menu()}
            <div id="popup-root" className="popup_root" />
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
        <div className="mobile-search-bar">
          {expand ? this.renderSearchBar() : ''}
        </div>
      </div>
    )
  }
}
export default Navbar
