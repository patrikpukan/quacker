// src/modules/authors/domain/author.ts

export class Author {
  id!: string;
  name!: string;
  bio!: string;
  birthYear!: number;
  bookIds!: string[];
}
