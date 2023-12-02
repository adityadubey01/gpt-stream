import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //Fetch data from TMDB API and udpate store
  const dispatch = useDispatch();

  const nowPlayingMoives = useSelector(
    (store) => store.movies.nowPlayingMoives
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMoives && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
