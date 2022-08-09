import React from 'react';
import { Button, Layout, Menu, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './index.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const items = [
  { label: '社区', key: 'forum' },
  { label: '面试找工', key: 'interview' },
  { label: '留学申请', key: 'apply' },
  { label: 'OfferShow', key: 'offer' }
];

const AppBar = () => {
  return (
    <Header
      style={{
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        position: 'fixed',
        zIndex: 1
      }}
    >
      <div className='logo'>
        <Link to='/'>RunHub</Link>
      </div>
      <div style={{ flex: 1 }}>
        <Menu
          theme="light"
          mode="horizontal"
          // defaultSelectedKeys={['interview']}
          items={items}
        />
      </div>
      <Space size="large">
        <Button shape="circle" icon={<GithubOutlined />} />
        <Button type="primary">登录</Button>
      </Space>
    </Header>
  );
};

export default AppBar;
