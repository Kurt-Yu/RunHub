import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppBar from './components/AppBar';

import './App.css';

const App = () => (
  <Layout>
    <AppBar />
    <Outlet />
  </Layout>
);

export default App;
