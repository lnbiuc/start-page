import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  try {
    const existUser = await prisma.user.findMany()

    return { enable: existUser }
  }
  catch (error) {
    console.error(error)
    return { error: 'Failed to fetch bookmarks' }
  }
})
