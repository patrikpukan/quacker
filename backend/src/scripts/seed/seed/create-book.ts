import { PrismaService } from 'src/core/prisma/prisma.service';

type CreateBookParams = {
  title: string;
  description: string;
  releaseYear: number;
  isbn: string;
};

export async function createBook(
  prisma: PrismaService,
  params: CreateBookParams,
): Promise<string> {
  const { title, description, releaseYear, isbn } = params;

  const book = await prisma.book.create({
    data: {
      title,
      description,
      releaseYear,
      isbn,
    },
  });

  return book.id;
}
