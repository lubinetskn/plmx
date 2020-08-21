interface IWidgetProps {
  products_all_launched_count: number;
  products_all_launched_percent: number;
  products_canceled_count: number;
  products_canceled_percent: number;
  products_cancelled_RTO: number;
  products_in_work_RTO: number;
  products_in_work_count: number;
  products_in_work_percent: number;
  products_on_sale_RTO: number;
  products_with_overdue_tasks_count: number;
  products_with_overdue_tasks_percent: number;
  products_with_problem_RTO: number;
  products_with_problem_count: number;
  products_with_problem_percent: number;
}

export interface WidgetState {
  widget: IWidgetProps;
  isLoading: boolean;
  error: string;
}
