// src/modules/authors/author.module.ts

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthorResolver } from './graphql/resolvers/authors.resolver';
import { BookAuthorsResolver } from './graphql/resolvers/book-authors.resolver';
import { AuthorRepository } from './repositories/authors.repository';
import { AuthorService } from './services/author.service';

@Module({
  imports: [PrismaModule],
  providers: [
    AuthorRepository,
    AuthorResolver,
    AuthorService,
    BookAuthorsResolver,
  ],
})
export class AuthorModule {}
