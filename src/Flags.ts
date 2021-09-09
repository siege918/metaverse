export enum Flags {
    HasUnlockedMetaverseTracker = "METAVERSETRACKER",
    HasUnlockedMovieEinstein = "MOVIEEINSTEIN"
}

export interface FlagMap {
    [key: string]: boolean
}