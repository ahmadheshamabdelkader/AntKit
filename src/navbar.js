import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

function NavBar() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <NavLink to="nav1">nav 1</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="nav2">nav 2</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="nav3">nav 3</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default NavBar;
