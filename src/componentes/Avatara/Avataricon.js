import { Avatar, Space } from 'antd';
import React from 'react';


const Avataricon= (props) => (
  <Space size={16} wrap>

    <Avatar size={props.size} style={{ backgroundColor: props.bg, color: props.color}} icon={props.icono} />

  </Space>
);


export default Avataricon;