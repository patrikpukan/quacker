// src/modules/authors/services/author.service.ts

import { Injectable } from '@nestjs/common';
import { AddAuthorInput } from '../domain/add-author-input';
import { Author } from '../domain/author';
import { AuthorRepository } from '../repositories/authors.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async getAuthors(): Promise<Author[]> {
    return this.authorRepository.getAuthors();
  }

  async addAuthor(input: AddAuthorInput): Promise<Author> {
    return this.authorRepository.addAuthor(input);
  }

  async getAuthorsByBookId(bookId: string): Promise<Author[]> {
    return this.authorRepository.getAuthorsByBookId(bookId);
  }
}
