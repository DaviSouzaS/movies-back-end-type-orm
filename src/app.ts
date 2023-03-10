import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import { loginRouter } from "./routes/movies.router"

const app: Application = express()
app.use(express.json())

app.use('/movies', loginRouter)

app.use(handleErrors)

export default app