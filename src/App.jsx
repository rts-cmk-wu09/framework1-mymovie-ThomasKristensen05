import './App.css'
import Heading from './components/Heading'
import SeeMoreButton from './components/SeeMoreButton'
import MovieCard from './templates/MovieCard'
import Switch from "react-switch"

function App() {
  return (
    <div className="App">
    <header className='gridContainer'>
      <Heading title="MyMovies" size="16"/>
      <Switch />
    </header>

    <main>
      <section>
        <div className="flexContainer space-between">
          <h2>Now Showing</h2>
          <SeeMoreButton />
        </div>
        <div className="flexContainer movieCardContainer">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
      <section></section>
    </main>

    <footer>
      <nav></nav>
    </footer>

    </div>
  )
}

export default App
