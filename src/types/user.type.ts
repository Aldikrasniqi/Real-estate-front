export interface IUser {
    username: string;
    email: string;
    password: string;
    token: string;
    islogged: boolean;
    roles: string[];
    image: string;
}

export default IUser;
