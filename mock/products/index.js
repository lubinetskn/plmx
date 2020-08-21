module.exports = () => {
  return {
    data: {
      results: [
        {
          process: 'Подготовка требований к продукту',
          task: 'Заполнить требования о качестве',
          responsible: 'Мария Ляпун',
          start: '2020-03-21',
          plan: '2020-03-22',
          delay: 0,
          status: 'new',
          statusText: 'Свежачок подъехал',
        },
        {
          process: 'Проведение тендера',
          task: 'Информирование о проведении торгов ',
          responsible: 'Михаил Сидоренко',
          start: '2020-04-10',
          plan: '2020-03-28',
          delay: 18,
          status: 'problem',
          statusText: 'Поставщик пропал, пытаемся найти',
        },
      ],
    },
  };
};
