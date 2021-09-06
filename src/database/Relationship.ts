import Actor from './Actor';

export default interface Relationship {
    id: string;
    actors: Actor[];
    startYear: number;
    endYear: number;
}