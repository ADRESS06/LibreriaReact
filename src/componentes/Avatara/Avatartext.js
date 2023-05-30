import { Avatar, Space } from 'antd';
import React from 'react';


const Avatartext= (props) => (
  <Space size={16} wrap>

    <Avatar size={props.size} style={{ backgroundColor: props.bg, color: props.color }}>{props.text}</Avatar>
  </Space>
);

export default Avatartext;