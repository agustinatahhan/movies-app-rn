import { nowPlayingAction } from "@/core/actions/now-playing-action";
import { popularMoviesAction } from "@/core/actions/popular.action";
import { topRatedMoviesAction } from "@/core/actions/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24  //mantiene la info fresca por 24hs
  });
   const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24  //mantiene la info fresca por 24hs
  });
   const topRatedQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: () => topRatedMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24  //mantiene la info fresca por 24hs
  });
   const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => upcomingMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24  //mantiene la info fresca por 24hs
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery
  };
};
