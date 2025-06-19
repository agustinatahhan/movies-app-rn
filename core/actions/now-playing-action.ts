import { movieApi } from "@/core/api/movie-api";
import { MoviDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MoviDBMoviesResponse>("/now_playing");

    const movies = data.results.map((movie) =>
      MovieMapper.fromTheMovieDBToMovie(movie)
    );

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
