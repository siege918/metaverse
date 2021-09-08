export enum Flag {
    HasUnlockedMetaverseTracker = "METAVERSETRACKER",
    HasUnlockedMovieEinstein = "MOVIEEINSTEIN"
}

interface FlagMap {
    [key: string]: boolean
}

export class FlagManager {
    private flagMap: FlagMap = {};

    setFlag(key: Flag, val: boolean) {
        this.flagMap[key as string] = val;
    }

    getFlag(key: Flag) {
        return !!this.flagMap[key as string];
    }
}