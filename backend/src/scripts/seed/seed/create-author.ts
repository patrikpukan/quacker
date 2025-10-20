// src/scripts/seed/seed/create-author.ts
import { PrismaService } from '../../../core/prisma/prisma.service';

type CreateAuthorParams = {
  name: string;
  bio: string;
  birthYear: number;
};

export async function createAuthor(
  prisma: PrismaService,
  params: CreateAuthorParams,
): Promise<string> {
  const { name, bio, birthYear } = params;

  const author = await prisma.author.create({
    data: {
      name,
      bio,
      birthYear,
    },
  });

  return author.id;
}
