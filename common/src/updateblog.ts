import z from 'zod';

export const updateblogModel = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type updateblogType = z.infer<typeof updateblogModel>