import React, { Component } from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";

//https://yts.mx/api/v2/list_movies.json

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    /**
    |--------------------------------------------------
    | const movie = await axios.get("https://yts.mx/api/v2/list_movies.json");
    | console.log(movie.data.data.movies);
    | 이 방식은 정석이지만 너무 길고, 사용이 불편해 아래와 같이 사용한다.
    |--------------------------------------------------
    */
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating ");
    this.setState({ movies,isLoading : false });
    
  }



  async componentDidMount() {
    this.getMovies();
  }
  
  
  render() {
    const { isLoading, movies } = this.state
    return (
      <section class="container">
        {isLoading ?
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
          : 
          <div class="movies">
            {movies.map(mv => (
              <Movie
                key={mv.id}
                id={mv.id}
                year={mv.year}
                title={mv.title}
                poster={mv.medium_cover_image}
                summary={mv.summary}
              />
            ))}

          </div>
          }
    </section>    
    );
  }
}

export default App;