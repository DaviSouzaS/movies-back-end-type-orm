import { deleteMovieService } from "../services/deleteMovie.service"
import { Request, Response } from "express"

const deleteMovieController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    await deleteMovieService(id)

    return response.status(204).send()
}

export { deleteMovieController }
