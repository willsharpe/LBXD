
import Link from "next/link";
import {Movie } from '../types/movies';
import { Syne_Mono } from "next/font/google"
import { useState } from "react";

const roboto = Syne_Mono({
    subsets:["latin"],
    weight:"400",
});
 function MovieCard({movie}: {movie:any}) {     // Takes in the "Movie" type as a prop, renders all the movie information that was passed down from MoveGrid
    return(
        
        <div className={`relative group w-[250px] h-[375px] overflow-hidden rounded-lg shadow-md cursor-pointer ${roboto.className}`}>
            <Link href={`/film/${movie.id}`} className="w-full">
                    <button>
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {movie.title}    {`${movie.release_date}`.split("-",1)}     {(movie.vote_average/2).toFixed(1)} 
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}alt={movie.title}/>
                    </button>
            </Link>
           
            
        </div>
    );
};

export default MovieCard;
