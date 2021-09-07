import User from "./User";

export enum USERS {
    jonii = "jonii"
}

interface UserMap {
    [key: string]: User;
}

const Users: UserMap = {
    "jonii": {
        name: "jonii"
    }
}

export default Users;