
export default function MovieCard(props){
    
        // console.log(props.movies);
        const {movies, addStars, removeStars, handlefav, toggleCart} = props;
        const {title,poster,plot,price,rating,stars,fav,cart} = props.movies;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="Poster" src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" alt="decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                                onClick={() =>{removeStars(movies)}}/>

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png" className="stars"/>

                                <img className="str-btn" alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                onClick={() => {addStars(movies)}}/>

                                <span> {stars}</span>

                            </div>

                            {/* {fav?<button className="unfavourite-btn" onClick={handlefav}>Un-favourite</button>:
                            <button className="favourite-btn" onClick={handlefav}>Favourite</button>}  */}

                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={() => handlefav(movies)}>
                            {fav?"Un-favourite":"Favourite"}</button>

                            <button className={cart?"remove-cart-btn":"cart-btn"} onClick={() =>toggleCart(movies)}>
                            {cart?"Remove from Cart":"Add to cart"}</button>

                        </div>
                    </div>
                </div>

            </div>
        )
}