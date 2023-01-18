import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
app.register(cors)
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  const habits = await prisma.habit.findMany()

  res.send(habits)
})

app.listen({
  port: 3000,
}).then(() => {
  console.log('Server listening on port 3000')
})