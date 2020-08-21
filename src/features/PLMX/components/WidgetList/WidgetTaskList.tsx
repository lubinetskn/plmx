import React from 'react';
import {Widget, WidgetTitle, WidgetText, WidgetWrap} from './styled';

export const WidgetList = ({widgetInfo}: any) => {
  return (
    <WidgetWrap>
      <Widget>
        <WidgetTitle>Задачи «Новые»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.tasks_new_count} шт ({widgetInfo?.tasks_new_percent} %)
        </WidgetText>
      </Widget>
      <Widget>
        <WidgetTitle>Задачи «в работе»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.tasks_in_work_count} шт ({widgetInfo?.tasks_in_work_percent} %)
        </WidgetText>
      </Widget>
      <Widget>
        <WidgetTitle>Задачи «проблема»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.tasks_problem_count} шт ({widgetInfo?.tasks_problem_percent} %)
        </WidgetText>
      </Widget>
      <Widget>
        <WidgetTitle>Задачи «с просрочкой»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.tasks_overdue_count} шт ({widgetInfo?.tasks_overdue_percent} %)
        </WidgetText>
      </Widget>
    </WidgetWrap>
  );
};

export default WidgetList;
