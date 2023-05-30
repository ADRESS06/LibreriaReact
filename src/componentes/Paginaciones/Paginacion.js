import React from 'react';
import { Pagination } from 'antd';

const paginacion = (props) => <Pagination defaultCurrent={1} total={props.pages} />;

export default paginacion;