export enum Flag {
    HasUnlockedMetaverseTracker = "METAVERSETRACKER",
    HasUnlockedMovieEinstein = "MOVIEEINSTEIN"
}

export interface FlagMap {
    [key: string]: boolean
}

export class FlagManager {
    public lastUpdate = Date.now();

    private flagMap: FlagMap = {};

    setFlag(key: Flag, val: boolean) {
        this.flagMap[key as string] = val;
        console.log(`Updated flag: ${key}: ${val}`);
        this.lastUpdate = Date.now()
    }

    getFlag(key: Flag) {
        return !!this.flagMap[key as string];
    }

    getFlagState() {
        return {...this.flagMap}
    }
}