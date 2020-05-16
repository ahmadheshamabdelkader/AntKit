import React from "react";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class NavBar extends React.Component{
  render(){
  return (
  <Layout className="layout">
    <Header>
      <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item  key="1">nav 1</Menu.Item>
        <Menu.Item  key="2">nav 2</Menu.Item>
        <Menu.Item  key="3">nav 3</Menu.Item>
      </Menu>
    </Header>  
  </Layout>

);
  }
}

export default NavBar;