import { Avatar, Space } from 'antd';
import React from 'react';

const Avatarimg= (props) => (
  <Space size={16} wrap>

    <Avatar size={props.size} src={<img src={props.url} alt="avatar" />} />

  </Space>
);

export default Avatarimg;