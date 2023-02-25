import { UserInterface } from "./user.interface";

export interface UserStateInterface {
    isLoading: boolean;
    loggedIn: boolean;
    user?: UserInterface;
    error: string | null;
}