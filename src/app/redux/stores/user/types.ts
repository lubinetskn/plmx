export interface UserInfo {
  plmx_role: 'PLMX_ADMIN' | 'PLMX_SUPERVISOR' | 'PLMX_HEAD' | 'PLMX_MANAGER';
  department: 'DEVELOPMENT_DEPARTMENT' | 'QUALITY_CONTROL_DEPARTMENT' | 'MARKETING_DEPARTMENT' | 'CATEGORY_DEPARTMENT';
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  fincode: [];
  subordinates: [];
}

export interface UserState {
  info: UserInfo;
  isAuthenticated: boolean;
}
