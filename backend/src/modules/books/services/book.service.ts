import { Injectable } from '@nestjs/common';
import { AddBookInput } from '../domain/add-book-input';
import { Book } from '../domain/book';
import { BookRepository } from '../repositories/books.repository';

@Injectable()
export class BookService {
  constructor(private readonly booksRepository: BookRepository) {}

  async getBooks(): Promise<Book[]> {
    return this.booksRepository.getBooks();
  }

  async addBook(input: AddBookInput): Promise<Book> {
    return await this.booksRepository.addBook(input);
  }

  async getBooksByAuthorId(authorId: string): Promise<Book[]> {
    return this.booksRepository.getBooksByAuthorId(authorId);
  }

  async deleteBook(bookId: string): Promise<null> {
    return this.booksRepository.deleteBook(bookId);
  }
}
