import './index.css'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import Reference from '../ReferencePage'
import Navbar from '../Navbar'

class TopRated extends Component {
  state = {movieDetails: '', isLoading: false}

  componentDidMount() {
    this.getData()
  }

  convertSnakeCaseToPascalCase = dta => ({
    adult: dta.adult,
    backdropPath: dta.backdrop_path,
    genreIds: dta.genre_ids,
    id: dta.id,
    originalLanguage: dta.original_language,
    originalTitle: dta.original_title,
    overView: dta.overview,
    popularity: dta.popularity,
    posterPath: dta.poster_path,
    releaseDate: dta.release_date,
    title: dta.title,
    video: dta.video,
    voteAverage: dta.vote_average,
    voteCount: dta.vote_count,
  })

  getData = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1'
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log('response data=', data)
    if (response.ok === true) {
      const {results} = data
      const newData = results.map(each =>
        this.convertSnakeCaseToPascalCase(each),
      )
      this.setState({
        movieDetails: newData,
        isLoading: false,
      })
    }
  }

  renderPopularDetails = det => {
    console.log('render popular detials fucntion////////*******', det)
    if (det !== '') {
      return det.map(each => <Reference key={each.id} movie={each} />)
    }
    return ''
  }

  renderLoading = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="blue" />
    </div>
  )

  renderResult = () => {
    const {isLoading, movieDetails} = this.state
    if (isLoading === false) {
      return this.renderPopularDetails(movieDetails)
    }
    return this.renderLoading()
  }

  render() {
    const {movieDetails} = this.state
    console.log('movie details*****', movieDetails)
    return (
      <>
        <Navbar />
        <div className="popular-container">
          <div className="width-container">
            <h1 className="popular-heading">Top Rated</h1>
            <ul className="movies-container">{this.renderResult()}</ul>
          </div>
        </div>
      </>
    )
  }
}

export default TopRated
