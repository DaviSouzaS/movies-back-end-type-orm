import { iMovieUpdate } from "../interfaces"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"

const updateMovieService = async (id: number, payload: iMovieUpdate): Promise<Movie | null> => {
  const moviesRepo = AppDataSource.getRepository(Movie)

  const updateMovie = await moviesRepo.save({id, ...payload})

  const movieId: number = updateMovie.id

  return await moviesRepo.findOneBy({id: movieId})
}

export { updateMovieService }
