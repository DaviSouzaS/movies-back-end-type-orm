import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { AppError } from "../error"

const ensureIfMovieExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const moviesRepo = AppDataSource.getRepository(Movie)

    const movieName = request.body.name

    if (!movieName) {
        return next()
    }

    const checkIfMovieExist = await moviesRepo.exist( {where: { name: movieName }})

    if (checkIfMovieExist) {
        throw new AppError("Movie already exists.", 409)
    }

    return next()
}

export {
    ensureIfMovieExist
}