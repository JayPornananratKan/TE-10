import { AdminInterface } from "./IAdmin";
import { TimeForEquipInterface } from "./ITimeForEquip";
import { TypeForEquipInterface } from "./ITypeEquip";
export interface EquipmentInterface{
    ID?: number;
    E_name?: string;
	Date?: Date;
	Pic?: string; 

    AdminID?: number;
    Admin?: AdminInterface;

    TypeEquipID?: number;
    TypeEquip?: TypeForEquipInterface;

    TimeForEquipID?: number;
    TimeForEquip?: TimeForEquipInterface;

}