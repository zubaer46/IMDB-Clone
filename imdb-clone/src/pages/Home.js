import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    fetch(
      ' https://api.themoviedb.org/3/movie/popular?api_key=2d8fc99ae41a856dfbd514f4390ff625&language=en-US'
    )
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  }, []);

  return <></>;
};
export default Home;
