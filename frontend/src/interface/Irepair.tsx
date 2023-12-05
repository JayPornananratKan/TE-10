import { MemberInterface } from "./Imember";
import { StatusrequestInterface } from "./Istatusrequest"
import { MachineInterface } from "./MacineInterface";




export interface RepairrequestInterface {
  ID?: number;
  Issue?: string;
  Imagemachine?: string;
  Daterequest?: Date | null;
  
  MemberID?: number;
  Member?: MemberInterface;

  MachineID?: number;
  Machine?: MachineInterface
  
  StatusrepairID?: number;
  Statusrepair?: StatusrequestInterface
}
