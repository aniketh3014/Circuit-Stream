import z from 'zod';

const signupModel = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string()
})

export type SignupType = z.infer<typeof signupModel>