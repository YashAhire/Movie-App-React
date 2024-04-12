import MovieCard from "./MovieCard";

function MovieList(props){

        // const {title,poster,plot,price,rating,stars,fav,cart} = state.movies;
        const {movies,addStars,removeStars,handlefav,toggleCart} = props;
        return(
            <>
            {movies.map((movie) => <MovieCard movies={movie} 
                                                addStars ={addStars}
                                                removeStars ={removeStars}
                                                handlefav ={handlefav}
                                                toggleCart ={toggleCart}
                                                key ={movie.id}/> )}
            
            </>
        )
}

export default MovieList;