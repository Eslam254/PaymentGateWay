export interface LOGIN_FROM {
  userName: string;
  password: string;
  rememberMe: boolean;
}

export interface Branch {}

export interface Floor {
  Id: 0;
  Name: string;
  ShowInPOS: boolean;
  BranchId: number;
  Tables: [];
}

export interface Group {
  Id: number;
  uid: string;
  code: string;
  orderNum: number;
  arabicName: string;
  latinName: string;
  photo: string;
  parentId: number;
  status: string;
  excludedBranches: number[];
}
