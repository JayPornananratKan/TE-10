import { BankInterface } from "./Ibank"
import { MemberInterface } from "./Imember"
import { StatuspayInterface } from "./Istatuspay"
import { TypememberInterface } from "./Itypemember"

export interface PaymentInterface{
    ID?: number

	Slip?: string
	TotalPrice?: number
	Datepay ?: Date | null

	BankID?: number
	Bank?: BankInterface
	
	StatuspayID?: number
	Statuspay?: StatuspayInterface
	
	TypememberID?: number
	Typemember?: TypememberInterface
	
	MemberID ?:number
	Member?: MemberInterface
}