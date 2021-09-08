import { Flag, FlagMap } from "./FlagManager";

export default interface CommonProps {
    FlagMap: FlagMap;
    setFlag: (flag: Flag, val: boolean) => void;
}