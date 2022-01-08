export interface FitnessEquipment {
    id?:number;
    equipmentId: number; 
    equipmentName: string;
    dateBought: string;
    price: number;
  }
  
  export const initialFitnessEquipment: FitnessEquipment = {
    id:0,
    equipmentId: 0,
    equipmentName:"",
    dateBought: '',
    price: 0
  };