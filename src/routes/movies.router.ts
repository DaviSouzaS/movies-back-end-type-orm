import { ensureIfMovieExist } from "../middlewares/ensureIfMovieExist.middleware"
import { createMoviesController } from "../controllers/createMovie.controller"
import { deleteMovieController } from "../controllers/deleteMovie.controller"
import { updateMovieController } from "../controllers/updateMovie.controller"
import { ensureIfIdExist } from "../middlewares/ensureIfIdExist.middleware"
import { readMoviesController } from "../controllers/readMovies.controller"
import { validateData } from "../middlewares/validateData.middlewares"
import { movieCreateSchema } from "../schemas"
import { updateMovieSchema } from "../schemas/updateMovie.schema"
import { Router } from "express"

const loginRouter: Router = Router()

loginRouter.post('', validateData(movieCreateSchema), ensureIfMovieExist, createMoviesController)

loginRouter.get('', readMoviesController)

loginRouter.patch('/:id', ensureIfIdExist, validateData(updateMovieSchema), ensureIfMovieExist, updateMovieController)

loginRouter.delete('/:id', ensureIfIdExist, deleteMovieController)

export {
    loginRouter
}