export interface Contract {
  id: number;
  contractId: number;
  firstName: string;
  lastName: string;
  startTime: string;
  membershipDuration: number;
  membershipFee: number;
}

export const initialContract: Contract = {
  id: 0,
  contractId: 0,
  firstName: '',
  lastName: '',
  startTime: '',
  membershipDuration: 0,
  membershipFee: 0
};
