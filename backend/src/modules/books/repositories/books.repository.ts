// src/modules/books/repositories/book.repository.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AddBookInput } from '../domain/add-book-input';
import { Book } from '../domain/book';

@Injectable()
export class BookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getBooks(): Promise<Book[]> {
    const books = await this.prisma.book.findMany({
      include: {
        authors: true,
      },
    });

    return books.map((book) => ({
      id: book.id.toString(),
      title: book.title,
      description: book.description,
      isbn: book.isbn,
      releaseYear: book.releaseYear,
      authorIds: book.authors.map((author) => author.id.toString()),
    }));
  }

  async getBooksByAuthorId(authorId: string): Promise<Book[]> {
    const books = await this.prisma.book.findMany({
      where: {
        authors: {
          some: {
            id: authorId,
          },
        },
      },
      include: {
        authors: true,
      },
    });

    const returnedBooks = books.map((book) => {
      return {
        id: book.id,
        title: book.title,
        description: book.description,
        isbn: book.isbn,
        releaseYear: book.releaseYear,
        authorIds: book.authors.map((author) => author.id.toString()),
      };
    });

    return returnedBooks;
  }

  async addBook(input: AddBookInput): Promise<Book> {
    const book = await this.prisma.book.create({
      data: {
        title: input.title,
        description: input.description || '',
        releaseYear: input.releaseYear || new Date().getFullYear(),
        isbn: input.isbn || '',
      },
      include: {
        authors: true,
      },
    });

    return {
      id: book.id.toString(),
      title: book.title,
      description: book.description,
      isbn: book.isbn,
      releaseYear: book.releaseYear,
      authorIds: book.authors.map((author) => author.id.toString()),
    };
  }

  async deleteBook(bookId: string): Promise<null> {
    await this.prisma.book.delete({
      where: {
        id: bookId,
      },
    });

    return null;
  }
}
