import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={<h1>Movie detail page</h1>} />
          <Route path='movie/:type' element={<h1>Movie list page</h1>} />
          <Route path='/*' element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
