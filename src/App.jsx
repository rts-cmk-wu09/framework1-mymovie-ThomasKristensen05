import './App.css'
import HeadingOne from './components/HeadingOne'
import HeadingTwo from './components/HeadingTwo'
import SeeMoreButton from './components/SeeMoreButton'
import MovieCard from './templates/MovieCard'

function App() {
  return (
    <div className="App">

    <header className='gridContainer'>
      <HeadingOne />
    </header>

    <main>
      <section>
        <div className="flexContainer space-between">
          <HeadingTwo />
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
