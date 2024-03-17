import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify, decode } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.post('/api/v1/user/signup', async (c) => {
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
    return c.json({Token: token})
  } catch {
    c.status(403);
    return c.json({
      error: "Error while signing up"
    });
  }
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('h')
})

app.post('/api/v1/blog', (c) => {
  return c.text('h')
})

app.put('/api/v1/blog', (c) => {
  return c.text('h')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('h')
})


app.get('/api/v1/blog/bulk', (c) => {
  return c.text('h')
})

export default app
