import { Movie } from "@/lib/types";
import MovieUI from "./MovieUI";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div>
      {movies.map(movie => (
        <MovieUI key={movie._id} movie={movie} />
      ))}
    </div>
  );
}
