import React from 'react';
import { Layout, Menu } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars-2';
const { Sider } = Layout;

const items = [
  { label: '推荐', key: 'rec' }, // 菜单项务必填写 key
  { label: '留学申请', key: 'apply' },
  { label: '海外生活', key: 'life' },
  { label: '职场达人', key: 'work' },
  { label: '世界公民', key: 'citizen' },
  { label: '投资理财', key: 'invest' },
  { label: '国内求职', key: 'job' },
  { label: '海外求职', key: 'overseas-job' },
  { label: '学习研究', key: 'study' },
  { label: '职位内推', key: 'referral' },
  { label: '娱乐闲情', key: 'entertainment' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [
      { label: '子菜单项', key: 'submenu-item-1' },
      { label: '子菜单项', key: 'submenu-item-2' },
      { label: '子菜单项', key: 'submenu-item-3' }
    ]
  }
];

const SideBar = () => {
  return (
    <Sider
      width={200}
      style={{
        height: 'calc(100vh-64px)',
        position: 'fixed',
        top: 64,
        left: 0,
        bottom: 0,
        overflow: 'auto',
        backgroundColor: 'white'
      }}
    >
      <Scrollbars autoHide>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0
          }}
          items={items}
        />
      </Scrollbars>
    </Sider>
  );
};

export default SideBar;
