import React, { Component } from 'react';
import axios from "axios";
import Movie from '../components/Movie';
import "./Home.css";

//https://yts.mx/api/v2/list_movies.json

class Home extends Component {

/**
|--------------------------------------------------
| isLoading은 로딩이 되었는지 여부를 체크할 State요소
| movies는 실제로 값을 받아낼 State요소
|--------------------------------------------------
*/
  state = {
    isLoading: true,
    movies: []
  };

  /**
|--------------------------------------------------
| async()를 사용하면, 동기식으로 변경되게된다.
| 이후 실행할 코드 앞에 await를 넣으면, 해당 코드가 실행될 때 까지 대기하게된다.
|--------------------------------------------------
*/

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
      <section className="container">
        {isLoading ?
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          : 
          <div className="movies">
            {movies.map(mv => (
              <Movie
                key={mv.id}
                id={mv.id}
                year={mv.year}
                title={mv.title}
                poster={mv.medium_cover_image}
                summary={mv.summary}
                genres = {mv.genres}
              />
            ))}

          </div>
          }
    </section>    
    );
  }
}

export default Home;