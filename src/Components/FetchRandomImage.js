import React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";
import axios from "axios";
const { Content } = Layout;

export default class FetchRandomImage extends React.Component {
  state = {
    error: null,
    loading: true,
    items: [],
  };

  componentDidMount() {
    axios
      .get("https://picsum.photos/v2/list?limit=6")
      .then((response) => {
        this.setState({
          loading: false,
          items: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          error,
        });
      });
  }

  render() {
    const { loading, items } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <Layout ClassName="layout" style={{ padding: "0 50px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 20,
              margin: 20,
              minHeight: 240,
            }}
          >
            <div className="site-layout-content">
              <Row style={{ textAlign: "center", margin: "20px 0 0 0" }}>
                <Col span={24}>
                  {items.map((item) => (
                    <img
                      style={{
                        resizeMode: "center",
                        height: 300,
                        width: 300,
                        margin: "20px 20px 20px 20px",
                      }}
                      alt=""
                      src={item.download_url}
                    />
                  ))}
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      );
    }
  }
}
