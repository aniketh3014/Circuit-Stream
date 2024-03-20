import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const exist = await prisma.user.findFirst({
      where: {
        email: body.email
      }, select: {
        email: true
      }
    })
    if (exist) {
      c.status(403);
      return c.json({ error: `User with this email ${exist} already exists` })
    }
    
    try {
      const create = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          username: body.username
        }
      });
      const token = await sign({id: create.id}, c.env.JWT_SECRET);
      return c.json({ token })
    } catch {
      c.status(403);
      return c.json({
        error: "Error while signing up"
      });
    }
})
  
userRouter.post('/signin', async (c) => {
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    const exist = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })
  
    if(!exist) {
      c.status(403);
      return c.json({
        error: "User not found"
      })
    }
  
    const token = await sign({ id: exist.id }, c.env.JWT_SECRET);
  
    return c.json({ token });
})

  