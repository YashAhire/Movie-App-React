
// import MovieCard from "./MovieCard";
import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesdata";
// import Student from "./Student";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount: 0
    }
    // this.addStars = this.addStars.bind(this);
    // if don't want to use bind function for this, we can use arrow function
}

handleIncStars = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    if(movies[mid].stars>=5){return;}
    movies[mid].stars += 0.5;
    this.setState({
        movies
    })

    // form 1
    // this.setState({
    //     stars: this.state.stars +=0.5
    // });

    // form 2
    // if(this.state.stars >=5){return;}
    // this.setState((prevstate) =>{
    //     return{
    //         stars: prevstate.stars + 0.5
    //     }
    // })

    // this.state.stars += 0.5;
    // console.log("this.state.stars: ", this.state.stars)
}

handleremoveStars = (movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    if(movies[mid].stars <=0){return;}
    movies[mid].stars -= 0.5;
    this.setState((prevstate) =>{
        return{
            movies
        }
    })
}

handlefav = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav
    this.setState({
        movies
    })
}


handleToggleCart = (movie) =>{
  let {movies,cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart
    if(movies[mid].cart){
      cartCount = cartCount + 1
    }else{
      cartCount = cartCount - 1
    }
    this.setState({
        movies,
        cartCount
    })
}
  render(){
    const {movies,cartCount} = this.state;

    return (
      <>
        <Navbar cartCount= {cartCount}/>
        <MovieList movies = {movies}
                          addStars ={this.handleIncStars}
                          removeStars ={this.handleremoveStars}
                          handlefav ={this.handlefav}
                          toggleCart ={this.handleToggleCart}/>
      </>
    );
  }
  
}

export default App;
