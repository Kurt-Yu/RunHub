import React from 'react';
import { Card, Col, Image, Layout, Row, Tooltip, Typography } from 'antd';

import './index.css';

const { Title, Paragraph, Text } = Typography;

const HomePage = () => {
  return (
    <Layout className="content">
      <Title
        level={3}
        style={{ fontSize: 48, color: '#1890ff', paddingTop: 32 }}
      >
        RunHub
      </Title>

      <Text type="secondary">顾名思义，这是一个供大家讨论 run 的论坛</Text>

      <Text type="secondary" style={{ paddingTop: 8 }}>
        如果你愿意，可以把它当做一个更现代化的一亩三分地
      </Text>

      <div style={{ width: '80%', paddingTop: 32 }}>
        <Row gutter={32}>
          <Col span={8}>
            <Card title="更现代化的论坛" hoverable>
              <Paragraph>
                RunHub 旨在创建一个更现代化的论坛，更美观的 UI，供大家分享信息，交流讨论。在这里你可以讨论留学、海外生活、工作经历等等。
                如果用的人多，后续会加入更多功能。
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="承诺永久免费" hoverable>
              <Paragraph>
                和某些网站不同，RunHub 的初衷是{' '}
                <Text strong>created by all, shared by all</Text>。
                每个人发布的帖子应该免费供其他人浏览。所以 RunHub
                不存在需要付费购买 vip 才能浏览帖子的情况。
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="开源" hoverable>
              <Paragraph>
                代码全部开源，如果你也想加入到开发工作中来，欢迎 Star / Fork。
                如果你觉得这个网站对你有帮助，请考虑通过 <Tooltip title={<Image src='assets/images/support.jpg' />}><Text type="danger" strong>打赏</Text></Tooltip> 的方式帮助我收回服务器成本。
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default HomePage;
