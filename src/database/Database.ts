import Actor from "./Actor";
import Bloovie from "./Bloovie";
import Relationship from "./Relationship";

export default interface Database {
    actors: Actor[],
    relationships: Relationship[],
    bloovies: Bloovie[]
}