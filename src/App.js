import React from "react";
import { Form, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./App.css";

function handleMenuClick(e) {
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const App = () => (
  <div>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button style={{ marginLeft: 8 }} type="primary">
          primary
        </Button>
        <Button style={{ marginLeft: 8 }}>secondary</Button>
        <Dropdown overlay={menu}>
          <Button style={{ marginLeft: 8 }}>
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </Form.Item>
    </Form>
  </div>
);

export default App;
