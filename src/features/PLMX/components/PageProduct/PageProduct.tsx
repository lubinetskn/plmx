import React, {FunctionComponent, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {spacing} from '@material-ui/system';
import {Divider} from '@material-ui/core';

import {Container, Title, ToolsRow, Filter, TableRow, Hint} from './styled';
import WidgetList from '../WidgetList';
import {DropdownFilter} from '../../../../shared/components/Select/DropdownFilter';

import {ModalFilter} from '../../../../shared/components/Modal/ModaFilter';
import ProductTable from '../../../../shared/components/ProductTable';
import ProductTableMarketing from '../../../../shared/components/ProductTableMarketing';
import ProductTableDevelopment from '../../../../shared/components/ProductTableDevelopment';

import {getProductsSelector} from '../../../../app/redux/stores/products/getters';
import {getProductsRequest} from '../../../../app/redux/stores/products/productsSlice';
import {userLoginRequest} from '../../../../app/redux/stores/user/userSlice';
import {getUserInfo} from '../../../../app/redux/stores/user/getters';
import {Product} from '../../../../shared/types/api-types';
import {transpile} from '../../../../shared/utils/helpers';
import {getProductWidgetRequest} from '../../../../app/redux/stores/widget/widgetSlice';
import {getWidget} from '../../../../app/redux/stores/widget/getters';
import {getTasksRequest} from '../../../../app/redux/stores/tasks/tasksSlice';
import {ProductMap} from '../../../../shared/utils/mappers';

type Props = {
  [key: string]: any;
};

const PageProduct: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const widgetInfo = useSelector(getWidget);
  const products = useSelector(getProductsSelector);
  const tm: Props = {},
    st: any = {},
    fc: any = {},
    pr: any = {},
    resp: any = {};

  useEffect(() => {
    dispatch(getTasksRequest());
  }, []);

  const user = useSelector(getUserInfo);
  const [ordering, setOrdering] = useState('');
  const [productsCopy, setProductsCopy] = useState([]);

  const [tradeMark, setTradeMark] = useState(tm);
  const [finCode, setFinCode] = useState(fc);
  const [status, setStatus] = useState(st);
  const [project, setProject] = useState(resp);

  const [filter, setFilter] = useState({
    status: '',
    fin_code: [],
    trade_mark: '',
    delay_in_days: 0,
  });

  const [modalOpen, setModalOpen] = React.useState(false); // NOTE: открытие модалки

  useEffect(() => {
    if (products && products.length === 0) {
      dispatch(getProductsRequest());
    }

    dispatch(getProductWidgetRequest());
    dispatch(userLoginRequest());
  }, []);

  useEffect(() => {
    if (productsCopy.length === 0) {
      setProductsCopy(products);
    }
  }, [products]);

  useEffect(() => {
    productsCopy.map((item: Product) => {
      if (item?.trade_mark?.id) {
        tm[item.trade_mark.id] = item.trade_mark.name;
      }
      if (item?.fin_code?.id) {
        fc[item.fin_code.id] = item.fin_code.name;
      }
      if (item?.status) {
        st[item.status] = ProductMap[item.status];
      }
      if (item?.project?.id) {
        pr[item.project.id] = item.project.name;
      }
      return null;
    });
    setTradeMark(tm);
    setFinCode(fc);
    setStatus(st);
    setProject(pr);
  }, [productsCopy]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFilter = (selectValues: {value: string; label: string}[], label: string) => {
    if (localStorage.getItem('taskOrder')) {
      // @ts-ignore
      setOrdering(localStorage.getItem('taskOrder'));
    }
    const valueArr = selectValues && selectValues.map((item: any) => item.value).join(',');
    setFilter(Object.assign(filter, {[label]: valueArr}));
    dispatch(getProductsRequest({filter, ordering}));
  };

  return (
    <Container>
      <WidgetList widgetInfo={widgetInfo} />
      <Title>
        <h1>Товары</h1>
        {/* <DownloadButton startIcon={<DownloadIcon />} variant="outlined" size="large">
          Скачать
        </DownloadButton> */}
      </Title>
      <Divider />
      <ModalFilter open={modalOpen} onClose={handleModalClose} />
      <ToolsRow>
        <Filter>
          <DropdownFilter
            placeholder="Проект"
            options={transpile(project)}
            onChange={e => {
              handleFilter(e, 'project');
            }}
          />

          <DropdownFilter
            placeholder="Финкод"
            options={transpile(finCode)}
            onChange={e => {
              handleFilter(e, 'fin_code');
            }}
          />
          <DropdownFilter
            placeholder="Торговая марка"
            options={transpile(tradeMark)}
            onChange={e => {
              handleFilter(e, 'trade_mark');
            }}
          />
          <DropdownFilter
            placeholder="Статус"
            options={transpile(status)}
            onChange={e => {
              handleFilter(e, 'status');
            }}
          />
          {products.length > 0 && <Hint>Количество записей: {products.length}</Hint>}
        </Filter>
      </ToolsRow>
      <TableRow>
        {user.department === 'CATEGORY_DEPARTMENT' && <ProductTable products={products} />}
        {(user.department === 'QUALITY_CONTROL_DEPARTMENT' || user.department === 'MARKETING_DEPARTMENT') && (
          <ProductTableMarketing products={products} />
        )}
        {user.department === 'DEVELOPMENT_DEPARTMENT' && <ProductTableDevelopment products={products} />}
      </TableRow>
    </Container>
  );
};

export default PageProduct;
