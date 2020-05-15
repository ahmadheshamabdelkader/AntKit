import React from "react";
import "./App.css";
// import { Layout, Menu, Breadcrumb } from "antd";
import Navbar from "./navbar";
import SideBar from "./SideBar";
import { Layout,  Breadcrumb } from "antd";
import PageContent from "./Content";

const { Content } = Layout;

export default function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout className="layout">
      <SideBar/>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <PageContent/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
