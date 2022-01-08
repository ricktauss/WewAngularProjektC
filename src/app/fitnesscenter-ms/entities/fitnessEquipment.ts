export interface FitnessEquipment {
    id: number; 
    equipmentName: string;
    dateBought: string;
    price: number;
  }
  
  export const initialFitnessEquipment: FitnessEquipment = {
    id: 0,
    equipmentName:"",
    dateBought: '',
    price: 0

  };