import { AccountInterface } from "./account.interface";

export interface UserInterface {
    email: string;
    firstName: string;
    lastName: string;
    accounts: AccountInterface[];
}