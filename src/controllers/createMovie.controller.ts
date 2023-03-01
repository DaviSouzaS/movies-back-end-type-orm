import { createMovieService } from "../services/createMovie.service"
import { Request, Response } from "express"
import { iMovieCreate } from "../interfaces"

const createMoviesController = async (request: Request, response: Response): Promise<Response> => {

  const users: iMovieCreate = await createMovieService(request.body)

  return response.status(201).json(users)
}

export { createMoviesController }
