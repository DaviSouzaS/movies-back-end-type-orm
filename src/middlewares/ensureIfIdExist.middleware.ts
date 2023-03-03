import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { AppError } from "../error"

const ensureIfIdExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const moviesRepo = AppDataSource.getRepository(Movie)

    const id = parseInt(request.params.id)

    const checkIfIdExist = await moviesRepo.findOne( {where: { id: id }})

    if (!checkIfIdExist) {
        throw new AppError("Movie not found", 404)
    }

    return next()
}

export {
    ensureIfIdExist
}