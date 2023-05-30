import React, { useState } from 'react';
import { Image } from 'antd';

const Carrusel = (props) => {
  const [visible, setVisible] = useState(false);
  const allsrc = ""
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={200}
        src={props.src}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
          <Image src={props.src} />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
          <Image src={allsrc} />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default Carrusel;