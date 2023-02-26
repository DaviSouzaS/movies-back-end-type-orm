import { z } from "zod"

const createMoviesSchema = z.object({
    name: z.string(),
    duration: z.number(),
    admin: z.number(),
    description: z.string().optional()
})

export {
    createMoviesSchema
}