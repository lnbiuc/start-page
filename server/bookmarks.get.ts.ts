import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  try {
    // 查询所有书签及其关联的文件
    const bookmarks = await prisma.bookmark.findMany({

    })

    return bookmarks
  }
  catch (error) {
    console.error(error)
    return { error: 'Failed to fetch bookmarks' }
  }
})
