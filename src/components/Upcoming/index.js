import './index.css'

import {Component} from 'react'
import Reference from '../ReferencePage'
import Navbar from '../Navbar'

class TopRated extends Component {
  state = {movieDetails: ''}

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
    const apiUrl =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&page=1'
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
      })
    }
  }

  renderPopularDetails = det => {
    if (det !== '') {
      return det.map(each => <Reference key={each.id} movie={each} />)
    }
    return ''
  }

  renderResult = () => {
    const {movieDetails} = this.state

    return this.renderPopularDetails(movieDetails)
  }

  render() {
    const {movieDetails} = this.state
    console.log('movie details*****', movieDetails)
    return (
      <>
        <Navbar />
        <div className="popular-container">
          <div className="width-container">
            <h1 className="popular-heading">Upcoming</h1>
            <ul className="movies-container">{this.renderResult()}</ul>
          </div>
        </div>
      </>
    )
  }
}

export default TopRated
