import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthModule } from 'src/shared/auth/auth.module';
import { AuthorBooksResolver } from './graphql/resolvers/author-books.resolver';
import { BookResolver } from './graphql/resolvers/book.resolver';
import { BookRepository } from './repositories/books.repository';
import { BookService } from './services/book.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [BookService, BookRepository, BookResolver, AuthorBooksResolver],
})
export class BooksModule {}
