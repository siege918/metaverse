export enum Flags {
    HasUnlockedMetaverseTracker = "METAVERSETRACKER",
    HasUnlockedMovieEinstein = "MOVIEEINSTEIN",
    HasClickedTestEvent = "TESTEVENT"
}

export interface FlagMap {
    [key: string]: boolean
}