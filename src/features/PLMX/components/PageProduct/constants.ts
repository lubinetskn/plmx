/* eslint-disable import/prefer-default-export */
export const tableColumns = [
  {
    label: 'Заказчик',
    width: 40,
    dataKey: 'customer',
    flexShrink: 1,
  },
  {
    label: 'Финкод',
    width: 80,
    dataKey: 'financial_code',
    flexShrink: 1,
  },
  {
    label: 'УИ4',
    width: 80,
    dataKey: 'size',
    flexGrow: 0,
  },
  {
    label: 'PLU',
    width: 80,
    dataKey: 'plu',
    flexShrink: 1,
    // numeric: true,
  },
  {
    label: 'ТОВАР (RU)',
    width: 100,
    dataKey: 'russian_title',
    flexGrow: 1,
  },
  {
    label: 'ТОВАР (EN)',
    width: 100,
    dataKey: 'english_title',
    flexGrow: 1,
  },
  {
    label: 'КАЛИБР',
    width: 80,
    dataKey: 'size',
    flexGrow: 0,
  },
  {
    label: 'КВАНТ',
    width: 80,
    dataKey: 'quantum',
    // numeric: true,
  },
  {
    label: 'КОЛЛИЧЕСТВО ОФФЕРОВ',
    width: 80,
    dataKey: 'quantum',
  },
  {
    label: 'ОБЩИЙ ОБЬЕМ',
    width: 80,
    dataKey: 'offers_volume',
  },
];
