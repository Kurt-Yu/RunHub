import { Card } from 'antd';
import React from 'react';

const AboutBox = () => {
  return (
    <Card
      title="Card title"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

export default AboutBox