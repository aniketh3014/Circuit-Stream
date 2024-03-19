import z from 'zod';

export const signinModel = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type SigninType = z.infer<typeof signinModel>