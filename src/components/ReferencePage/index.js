import './index.css'

const Reference = props => {
  const {movie} = props
  const {title, posterPath, voteAverage} = movie

  const imageUrl = `https://image.tmdb.org/t/p/original/${posterPath}`

  return (
    <li className="movie-item">
      <img src={imageUrl} alt="moviePoster" className="image" />
      <p className="text">{title}</p>
      <p className="text">{voteAverage}</p>
      <button type="button" className="viewbutton">
        View Details
      </button>
    </li>
  )
}

export default Reference
