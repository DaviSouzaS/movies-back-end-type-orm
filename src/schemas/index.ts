import { z } from "zod"

const movieCreateSchema = z.object({
    name: z.string().max(50),
    duration: z.number().int().positive(),
    price: z.number().int().positive(),
    description: z.string().optional()
})

export {
    movieCreateSchema
}