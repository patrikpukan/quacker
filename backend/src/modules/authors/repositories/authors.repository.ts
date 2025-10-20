// src/modules/authors/repositories/author.repository.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AddAuthorInput } from '../domain/add-author-input';
import { Author } from '../domain/author';

@Injectable()
export class AuthorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAuthors(): Promise<Author[]> {
    const authors = await this.prisma.author.findMany({
      include: {
        books: true,
      },
    });

    return authors.map((author) => ({
      id: author.id.toString(),
      name: author.name,
      bio: author.bio,
      birthYear: author.birthYear,
      bookIds: author.books.map((book) => book.id.toString()),
    }));
  }

  async addAuthor(input: AddAuthorInput): Promise<Author> {
    const author = await this.prisma.author.create({
      data: {
        name: input.name,
        birthYear: input.birthYear,
        bio: input.bio,
      },
      include: {
        books: true,
      },
    });

    return {
      id: author.id.toString(),
      name: author.name,
      birthYear: author.birthYear,
      bio: author.bio,
      bookIds: author.books.map((book) => book.id.toString()),
    };
  }

  async getAuthorsByBookId(bookId: string): Promise<Author[]> {
    const authors = await this.prisma.author.findMany({
      where: {
        books: {
          some: {
            id: bookId,
          },
        },
      },
      include: {
        books: true,
      },
    });

    return authors.map((author) => ({
      id: author.id.toString(),
      name: author.name,
      bio: author.bio,
      birthYear: author.birthYear,
      bookIds: author.books.map((book) => book.id.toString()),
    }));
  }
}
