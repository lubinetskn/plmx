export type FinCode = {
  id: number;

  name: string;
};
export type Supplier = {
  id?: number;

  name: string;
};
export type TradeMark = {
  id?: number;

  name: string;
};
export type UI4 = {
  id?: number;

  name: string;
};
export type LifeCycleProcess = {
  id?: number;

  name: string;

  description?: string;

  lifecycle_stage: number;
};
export type LifeCycleStage = {
  id?: number;

  name: string;

  description?: string;

  lifecycle: number;
};
export type LifeCycleTask = {
  id?: number;

  name: string;

  description?: string;

  lifecycle_process?: LifeCycleProcess;
};
export type LifeCycle = {
  id?: number;

  name: string;

  description?: string;
};
export type User = {
  id?: string;

  first_name?: string;

  last_name?: string;

  email?: string;
};
export type Project = {
  id?: number;

  name: string;
};
export type Product = {
  id?: number;

  name: string;

  fin_code: FinCode;

  ui4?: UI4;

  trade_mark?: TradeMark;

  rto: string;

  sell_start_date?: string;

  supplier?: Supplier;

  commentary?: string;

  purchase_price: string;

  status: 'PRODUCT_NEW' | 'PRODUCT_IN_WORK' | 'PRODUCT_PROBLEM' | 'PRODUCT_DONE' | 'PRODUCT_CANCEL';

  author?: User;

  delay_in_days?: number;

  problem_tasks?: [];

  active_processes?: [];

  project?: Project;

  created?: string;

  updated?: string;
};
export type ProductTask = {
  id?: number;

  responsible: User;

  responsible_id: string;

  task?: LifeCycleTask;

  product?: Product;

  status?: 'TASK_NEW' | 'TASK_IN_WORK' | 'TASK_PROBLEM' | 'TASK_DONE' | 'TASK_CANCEL';

  start_date?: string;

  planned_completion_date?: string;

  delay_in_days?: number;

  child_tasks?: string;

  comments?: string;

  created?: string;

  updated?: string;
};
export type TaskCommentary = {
  id?: number;

  comment?: string;

  task?: number;

  author?: User;

  created?: string;

  updated?: string;
};
export type TokenObtainPair = {
  email: string;

  password: string;
};
export type TokenRefresh = {
  refresh: string;
};
export type TokenVerify = {
  token: string;
};
