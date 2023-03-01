import { updateMovieService } from "../services/updateMovie.service"
import { Request, Response } from "express"
import { iMovieUpdate } from "../interfaces"

const updateMovieController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const dataRequest: iMovieUpdate = request.body

    const updateMovie = await updateMovieService(id, dataRequest)

    return response.status(200).json(updateMovie)
}

export { updateMovieController }
