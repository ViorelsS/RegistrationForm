export interface UserData {
  id?: number; //Id is assigner from the API
  name: string;
  email: string;
  status: string;
  gender: string;
}

export enum StatusType {
  Active = 'active',
  Inactive = 'inactive',
}

export enum GenderType {
  Male = 'male',
  Female = 'female',
}
