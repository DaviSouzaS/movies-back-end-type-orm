import { z } from "zod"

const updateMovieSchema = z.object({
    name: z.string().max(50).optional(),
    duration: z.number().int().positive().optional(),
    price: z.number().int().positive().optional(),
    description: z.string().optional()
})

export {
    updateMovieSchema
}