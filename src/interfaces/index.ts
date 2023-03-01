import { iMovieCreate, iMovieRepo, iMovieUpdate } from './movies.interface';
import { Movie } from "../entities"

interface iMoviesPagination {
  prevPage: string | null,
  nextPage: string | null,
  count: number,
  data: Movie[]
}

export {
  iMovieCreate,
  iMovieUpdate,
  iMovieRepo,
  iMoviesPagination
};