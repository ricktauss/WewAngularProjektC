export interface Course {
  id: number,
  courseID: number;
  instructor: string;
  name: string;
  starttime: string;
  endtime: string;
  startdate: Date;
  enddate: Date;
  additionalinfo: string;
}

/*
export const initialCourse: Course = {
  id: 0,
  courseID: 0,
  instructor: '',
  name: '',
  starttime: '',
  endtime: '',
  startdate: new Date('2000-00-00'),
  enddate: new Date('2000-00-00'),
  additionalinfo: ''
};*/
