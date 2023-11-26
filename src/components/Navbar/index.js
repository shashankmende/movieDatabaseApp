import './index.css'
import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
  state = {movieName: ''}

  onChangeMovieName = event => {
    this.setState({
      movieName: event.target.value,
    })
  }

  /*    menu = () => (
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

  renderSearchBar = () => {
    const {movieName} = this.state
    return (
      <div className="search-container">
        <input
          type="search"
          className="input"
          value={movieName}
          placeholder="Enter movie name"
          onChange={this.onChangeMovieName}
        />
        <Link to={`/searchMovies/${movieName}`}>
          <button type="button" className="search-button">
            Search
          </button>
        </Link>
      </div>
    )
  } */

  onClickSearchBtn = () => {
    const {movieName} = this.state

    if (movieName !== '') {
      const {history} = this.props

      history.push(`/searchMovies/${movieName}`)
    }
  }

  render() {
    const {movieName} = this.state
    return (
      <div>
        <div className="nav-container">
          <h1 className="title">movieDB</h1>

          <div className="search-container">
            <input
              type="search"
              className="input"
              value={movieName}
              placeholder="Enter movie name"
              onChange={this.onChangeMovieName}
            />
            {/*   <Link to={`/searchMovies/${movieName}`} */}
            <button
              type="button"
              className="search-button"
              onClick={this.onClickSearchBtn}
            >
              Search
            </button>
            {/*   </Link> */}
          </div>

          {/*   <button
            type="button"
            className="search-button small-screen-button"
            onClick={this.onClickButton}
          >
            Search
          </button> */}

          {/* <div className="small-devicesD">
            {this.menu()}
            <div id="popup-root" className="popup_root" />
          </div> */}

          <ul className="routes-container">
            <Link to="/" className="link-component">
              <li>
                <button type="button">Popular</button>
              </li>
            </Link>
            <Link to="/top-rated" className="link-component">
              <li>
                <button type="button">Top Rated</button>
              </li>
            </Link>
            <Link to="/upcoming" className="link-component">
              <li>
                <button type="button">Upcoming</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(Navbar)
