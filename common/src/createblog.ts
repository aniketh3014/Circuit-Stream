import z from 'zod';

export const createblogModel = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateblogType = z.infer<typeof createblogModel>