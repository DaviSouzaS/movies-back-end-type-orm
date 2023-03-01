import { AppDataSource } from "../data-source"
import { iMoviesPagination } from "../interfaces"
import { Movie } from "../entities"

const readMovieService = async (payload: any): Promise<iMoviesPagination> => {
    const moviesRepo = AppDataSource.getRepository(Movie)

    const sort: string = payload.sort || "id"

    const order: string = payload.order || "asc"

    let page: number = Number(payload.page) || 1
    let perPage: number = Number(payload.perPage) || 5

    if (page < 0 && Number.isInteger(page)) {
        page = 1
    }

    if (perPage < 0 && Number.isInteger(perPage)) {
        perPage = 5
    }

    const movies: Movie[] = await moviesRepo.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: {[sort]: order}  
    })

    const lastPage = page - 1

    const baseUrl: string = `http://localhost:3000/movies`

    let previousPage: string | null = lastPage === 0 ? null : `${baseUrl}?page=${lastPage}&perPage=${perPage}`

    let nextPage: string | null = movies.length < perPage ? null : `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    const moviesPagination = {
        prevPage: previousPage,
        nextPage: nextPage,
        count: movies.length,
        data: movies
    }

    return moviesPagination
}

export { readMovieService }
