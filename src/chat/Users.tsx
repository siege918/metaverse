import User from "./User";

export enum UserKey {
    jonii = "jonii",
    chuck = "chuck"
}

interface UserMap {
    [key: string]: User;
}

const Users: UserMap = {
    "jonii": {
        name: "jonii",
        color: "coral"
    },
    "chuck": {
        name: "ChuckRockFan69",
        color: "purple"
    }
}

export default Users;