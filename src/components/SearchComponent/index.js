import './index.css'

import {Component} from 'react'
import Navbar from '../Navbar'
import Reference from '../ReferencePage'

class Search extends Component {
  state = {searchResults: ''}

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
    const {match} = this.props
    const {params} = match
    const {movieName} = params

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=888e953eb74eb6d5e00f9d0a0bc602cd&language=en-US&query=${movieName}&page=1`
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const {results} = data
      const newData = results.map(each =>
        this.convertSnakeCaseToPascalCase(each),
      )
      this.setState({
        searchResults: newData,
      })
    }
  }

  renderSearchResults = () => {
    const {searchResults} = this.state

    if (searchResults !== '') {
      return (
        <>
          <div className="results-home-container">
            <h1 className="heading">Search Results</h1>
            <ul className="search-result-container">
              {searchResults.map(each => (
                <Reference movie={each} key={each.id} />
              ))}
            </ul>
          </div>
        </>
      )
    }
    return ''
  }

  render() {
    return (
      <>
        <div className="search-home-container">
          <Navbar />
          {this.renderSearchResults()}
        </div>
      </>
    )
  }
}

export default Search
