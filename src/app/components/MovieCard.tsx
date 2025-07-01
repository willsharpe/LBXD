
import Image from "next/image";
import {Movie } from '../types/movies';
import { Bokor } from "next/font/google"

const bokor = Bokor({
    subsets:["latin"],
    weight:"400",
});
 function MovieCard({movie}: {movie:any}) {       // Takes in the "Movie" type as a prop, renders all the movie information that was passed down from MoveGrid
    return(
        <div>
            <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={250}
            height={450}
            />

            <div className="font-geist">
                {movie.title}
            </div>
            <div>
                {movie.voteAverage}
            </div>
           
           
        </div>
       
        

    );
};

export default MovieCard;
