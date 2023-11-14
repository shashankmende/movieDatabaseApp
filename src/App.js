import './App.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Popular from './components/PopularPage'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'

// write your code here
const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
    </Switch>
  </>
)

export default App
