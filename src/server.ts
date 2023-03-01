import { AppDataSource } from "./data-source"
import app from "./app"

AppDataSource.initialize().then(() => {
    console.log("Database connected!")
    app.listen(3000, async () => {
        console.log("Server is running!")
    })
}).catch(err => {
    console.log(err)
})
