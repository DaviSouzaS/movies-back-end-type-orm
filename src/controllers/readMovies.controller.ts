import { readMovieService } from "../services/readMovie.service"
import { Request, Response } from "express"

const readMoviesController = async (request: Request, response: Response): Promise<Response> => {

    const movies = await readMovieService(request.query)

    return response.status(200).json(movies)
}

export { readMoviesController }
