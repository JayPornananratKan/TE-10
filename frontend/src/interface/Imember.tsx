import { TypememberInterface } from "./Itypemember";

export interface MemberInterface{
    ID?: number;
	Username?: string;
	Email?: string;
	Password?: string;
	
	TypememberID?: number;
	Typemember?: TypememberInterface;

}