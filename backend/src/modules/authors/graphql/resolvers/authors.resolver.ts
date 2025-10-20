// src/modules/authors/graphql/resolvers/author.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddAuthorInput } from '../../domain/add-author-input';
import { Author } from '../../domain/author';
import { AuthorService } from '../../services/author.service';
import { AddAuthorInputType } from '../types/add-author-input.type';
import { AuthorType } from '../types/author.type';

@Resolver(() => AuthorType)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorType])
  async authors(): Promise<Author[]> {
    return this.authorService.getAuthors();
  }

  @Mutation(() => AuthorType)
  async addAuthor(@Args('data') data: AddAuthorInputType): Promise<Author> {
    const input: AddAuthorInput = {
      name: data.name,
      bio: data.bio,
      bookIds: data.bookIds,
      birthYear: data.birthYear,
    };

    return this.authorService.addAuthor(input);
  }
}
