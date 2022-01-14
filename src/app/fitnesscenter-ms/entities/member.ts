export interface Member {
  id: number,
  memberID: number;
  firstname: string;
  lastname: string;
  address: string;
  birthdate: Date;
  email: string;
}

export const initialMember: Member = {
  id: 0,
  memberID: 0,
  firstname: '',
  lastname: '',
  address: '',
  birthdate: new Date("2000-01-01"),
  email: ''
};

