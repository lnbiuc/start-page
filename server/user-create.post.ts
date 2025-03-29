import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  try {
    const existUser = prisma.user.findMany()
  }
  catch (error) {
    console.error(error)
    return { error: 'Failed to fetch bookmarks' }
  }
})
