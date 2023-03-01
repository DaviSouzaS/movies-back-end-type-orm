import { AppDataSource } from "../data-source"
import { iMovieCreate } from "../interfaces"
import { Movie } from "../entities"

const createMovieService = async (payload: iMovieCreate): Promise<Movie> => {
  const moviesRepo = AppDataSource.getRepository(Movie)
  const movie = moviesRepo.create(payload)

  await moviesRepo.save(movie)

  return movie
};

export { createMovieService }
