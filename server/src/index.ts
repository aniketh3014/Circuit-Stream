import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify, decode } from 'hono/jwt'
import { userRouter } from './routes/user';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }, Variables : {
    userId: string
  }
}>();



app.use("/api/v1/blog/*", async (c, next) => {
  const header = c.req.header("authorization");

  if (!header || !header.startsWith("Bearer ")) {
    c.status(403);
    return c.json({ error: "Invalid token" })
  }
  const token = header?.split(" ")[1];
  try {
    const verified = await verify(token, c.env.JWT_SECRET)
    c.set('userId', verified.id)
    await next()
  } catch {
    c.status(401);
  return c.json({ error: "User not authorized" });
  }
});

app.route('/api/v1/user', userRouter);
// app.route('/api/v1/blog', blogRouter);

app.post('/api/v1/blog', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const userId = c.get('userId');
  const body = await c.req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId
    }
  });

  return c.json({
    id: post.id
  })
  
return c.text('id')
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
