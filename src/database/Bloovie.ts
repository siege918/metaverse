import Actor from './Actor';

export default interface Bloovie {
    id: string;
    name: string;
    actors: Actor[];
    releaseYear: number;
    goofs: string[];
}