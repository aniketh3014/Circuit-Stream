import z from 'zod';

export const signupModel = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string()
})

export const signinModel = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const updateblogModel = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export const createblogModel = z.object({
    title: z.string(),
    content: z.string()
})

export type SignupType = z.infer<typeof signupModel>
export type SigninType = z.infer<typeof signinModel>
export type updateblogType = z.infer<typeof updateblogModel>
export type CreateblogType = z.infer<typeof createblogModel>