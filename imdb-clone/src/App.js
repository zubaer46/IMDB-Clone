import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import MovieList from './components/movieList/movieList';
import MovieDetail from './pages/movieDetail/movieDetail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetail />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
