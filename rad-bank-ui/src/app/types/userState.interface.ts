import { AccountInterface } from "./account.interface";
import { UserInterface } from "./user.interface";

export interface UserStateInterface {
    isLoading: boolean;
    loggedIn: boolean;
    user?: UserInterface;
    accounts?: AccountInterface[];
    error: string | null;
}