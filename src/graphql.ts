
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    OTHER = "OTHER"
}

export enum Category {
    HORROR = "HORROR",
    COMEDY = "COMEDY",
    ACTION = "ACTION",
    SCIFI = "SCIFI",
    FANTASY = "FANTASY"
}

export class CreateFilmInput {
    name: string;
    description: string;
    category: Category[];
    imdb: number;
    actors: string[];
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract actor(_id: string): Actor | Promise<Actor>;

    abstract film(_id: string): Film | Promise<Film>;
}

export class Actor {
    __typename?: 'Actor';
    _id: string;
    gender: Gender;
    age: number;
    movies: Film[];
}

export class Film {
    __typename?: 'Film';
    _id: string;
    name: string;
    description: string;
    category: Category[];
    imdb: number;
    actors: string[];
}

type Nullable<T> = T | null;
