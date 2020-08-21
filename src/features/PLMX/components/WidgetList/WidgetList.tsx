import React from 'react';
import {Widget, WidgetTitle, WidgetText, WidgetWrap} from './styled';
import {getUserInfo} from '../../../../app/redux/stores/user/getters';
import {useSelector} from 'react-redux';

export const WidgetList = ({widgetInfo}: any) => {
  const user = useSelector(getUserInfo);

  if (user.department === 'DEVELOPMENT_DEPARTMENT') {
    return (
      <WidgetWrap>
        <Widget>
          <WidgetTitle>РТО новых товаров</WidgetTitle>
          <WidgetText>{widgetInfo?.products_new_RTO} млн руб.</WidgetText>
        </Widget>
        <Widget>
          <WidgetTitle>РТО товаров в работе</WidgetTitle>
          <WidgetText>{widgetInfo?.products_in_work_RTO} млн руб.</WidgetText>
        </Widget>
        <Widget>
          <WidgetTitle>РТО проблемныx товаров</WidgetTitle>
          <WidgetText>{widgetInfo?.products_with_problem_RTO} млн руб.</WidgetText>
        </Widget>
        <Widget>
          <WidgetTitle>РТО товаров в продаже</WidgetTitle>
          <WidgetText>{widgetInfo?.products_on_sale_RTO} млн руб. </WidgetText>
        </Widget>
      </WidgetWrap>
    );
  }
  return (
    <WidgetWrap>
      <Widget>
        <WidgetTitle>Товаров «новые»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.products_new_count} шт ({widgetInfo?.products_new_percent} %)
        </WidgetText>
      </Widget>
      <Widget>
        <WidgetTitle>Товары «в работе»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.products_in_work_count} шт ({widgetInfo?.products_in_work_percent} %)
        </WidgetText>
      </Widget>
      <Widget>
        <WidgetTitle>Товаров «проблема»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.products_with_problem_count} шт ({widgetInfo?.products_with_problem_percent} %)
        </WidgetText>
      </Widget>
      <Widget>
        <WidgetTitle>Товаров «с просрочкой»</WidgetTitle>
        <WidgetText>
          {widgetInfo?.products_with_overdue_tasks_count} шт ({widgetInfo?.products_with_overdue_tasks_percent} %)
        </WidgetText>
      </Widget>
    </WidgetWrap>
  );
};

export default WidgetList;
