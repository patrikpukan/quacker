// src/modules/authors/domain/add-author-input.ts

export class AddAuthorInput {
  name!: string;
  bio!: string;
  birthYear!: number;
  bookIds!: string[];
}
