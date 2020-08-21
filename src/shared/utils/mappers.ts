export const StatusMap = {
  TASK_NEW: 'Новый',
  TASK_DONE: 'Готово',
  TASK_IN_WORK: 'В работе',
  TASK_PROBLEM: 'Проблема',
  TASK_CANCEL: 'Отмена',
};

export const TRANSITION_STATUS = {
  TASK_CANCEL: [],
  TASK_DONE: [],
  TASK_NEW: [{value: 'TASK_IN_WORK', label: 'В работе'}],
  TASK_IN_WORK: [
    {value: 'TASK_DONE', label: 'Завершено'},
    {value: 'TASK_CANCEL', label: 'Отмена'},
    {value: 'TASK_PROBLEM', label: 'Проблема'},
  ],
  TASK_PROBLEM: [
    {value: 'TASK_CANCEL', label: 'Отмена'},
    {value: 'TASK_IN_WORK', label: 'В работе'},
  ],
};

export const ProductMap = {
  PRODUCT_NEW: 'Новый',
  PRODUCT_DONE: 'Готово',
  PRODUCT_IN_WORK: 'В работе',
  PRODUCT_PROBLEM: 'Проблема',
  PRODUCT_CANCEL: 'Отмена',
};

export const PLMX_ROLES = {
  PLMX_ADMIN: 'Администратор',
  PLMX_SUPERVISOR: 'Супервайзер',
  PLMX_HEAD: 'Руководитель отдела',
  PLMX_MANAGER: 'Сотрудник',
};

export const PLMX_DEPARTMENTS = {
  CATEGORY_DEPARTMENT: 'Категорийный департамент ТС Перекресток',

  QUALITY_CONTROL_DEPARTMENT: 'Отдел контроля Качества СТМ-продукции ТС Перекресток',
  MARKETING_DEPARTMENT: 'Отдел Маркетинга СТМ-продукции ТС Перекресток',

  DEVELOPMENT_DEPARTMENT: 'Отдел развития СТМ ТС Перекресток',
};
