export interface FitnessEquipment {
    id?:number;
    equipmentId?: number; 
    equipmentName: string;
    equipmentCategory:string;
    dateBought: string;
    price?: number;
  }
  
  export const initialFitnessEquipment: FitnessEquipment = {
    id:undefined,
    equipmentId: undefined,
    equipmentName:"",
    equipmentCategory:"",
    dateBought:'2022.01.01',
    price: undefined
  };

  export function numberOnly(event:any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
