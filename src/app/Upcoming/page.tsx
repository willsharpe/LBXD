"use client";
import { useEffect,useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import MovieIcon from "../components/MovieIcon";

function Upcoming(){
    const [upcomingMovies,setUpcomingMovies] = useState([]);
    useEffect(() => {
        async function fetchUpcoming(){
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
            const options = {
                method:"GET",
                headers : {
                    accept:"application/json",
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDdiZGE0ZGViOTBjYjEyMjg5YWZhNzA5NWZlM2JjOCIsIm5iZiI6MTc0MDE5MzQzMy43NTMsInN1YiI6IjY3YjkzZTk5YjdjMzU0NTlhZGJlOWI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CvKxcBpv7alilMOrfhkvMwLRplmBiiyU0R-CeTYjCCo`
                }
            };
            const res = await fetch(url,options);
            const data = await res.json();
            setUpcomingMovies(data);
        }
        fetchUpcoming();
    },[])




    return(
        <>
            <MovieIcon/>
            <NavBar onSignInClick={()=> {}} onSignUpClick={() => {}}/>
        </>
       
    )
}
export default Upcoming