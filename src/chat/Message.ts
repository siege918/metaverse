import User from "./User";

export default interface Message {
    user: User;
    timestamp: Date;
    text: string;
}