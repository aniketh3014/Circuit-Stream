import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import { createblogModel, updateblogModel } from "@aniketh3014/bolg-common/dist";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
  }, Variables: {
      userId: string
  }
}>();

blogRouter.use("/*", async (c, next) => {
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

blogRouter.post('/', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const userId = c.get('userId');
  const body = await c.req.json();
  const { success } = createblogModel.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({ error: "Invalid inputs" });
  }
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
})
  
blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get('userId');
  const body = await c.req.json();
  const { success } = updateblogModel.safeParse(body);
  if(!success) {
    c.status(400);
    return c.json({ error: "Invalid inputs" });
  }
  await prisma.post.update({
    where: {
      id: body.id,
      authorId: userId
    },
    data: {
      title: body.title,
      content: body.content 
    }
  })
  return c.json({ message: "Post updated successfully" })
})
  
blogRouter.get('/get/:id', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param('id')
  const post = await prisma.post.findUnique({
    where: {
      id: id
    }
  });
  return c.json(post);
})
  
  
blogRouter.get('/bulk', async (c) => {

  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
  const posts = await prisma.post.findMany();
  return c.json({posts: posts});
  } catch (e){
  c.status(402);
  return c.json({error: e});
  }
})