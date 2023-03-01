import { AppDataSource } from "../data-source"
import { Movie } from "../entities"

const deleteMovieService = async (id: number): Promise<void> => {
  const moviesRepo = AppDataSource.getRepository(Movie)

  const deleteMovie = await moviesRepo.findOneBy({id: id})

   await moviesRepo.remove(deleteMovie!)
}

export { deleteMovieService }
