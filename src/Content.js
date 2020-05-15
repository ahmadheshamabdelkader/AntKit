import React from "react";
import { Row, Col } from "antd";

import { Switch, Route } from "react-router-dom";

function PageContent() {
  return (
    <Switch>
      <Route path="/models">
        <div className="site-layout-content">
          <Row
            style={{
              textAlign: "center",
              fontStyle: "oblique",
              fontWeight: "bolder",
              fontSize: "large",
            }}
          >
            <Col span={8}>
              <p style={{ textAlign: "center" }}> Bolbola </p>
            </Col>
            <Col span={8}>
              <p style={{ textAlign: "center" }}> Gigi </p>
            </Col>
            <Col span={8}>
              <p style={{ textAlign: "center" }}> Karol </p>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col span={8}>
              <img
                style={{
                  resizeMode: "center",
                  height: 290,
                  width: 190,
                }}
                alt=""
                src="https://i.pinimg.com/originals/6e/ca/27/6eca27e3a5c3fe4bc65de3e04057d483.jpg"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                style={{
                  resizeMode: "center",
                  height: 290,
                  width: 190,
                }}
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gigi_Hadid._2015.jpg"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                style={{
                  resizeMode: "center",
                  height: 290,
                  width: 190,
                }}
                alt=""
                src="https://live.staticflickr.com/4648/38771394610_647dcb75f7_b.jpg"
              />
            </Col>
          </Row>
          <Row style={{ textAlign: "center", margin: "20px 0 0 0" }}>
            <Col span={8}>
              <img
                style={{
                  resizeMode: "center",
                  height: 290,
                  width: 190,
                }}
                alt=""
                src="https://www2.pictures.zimbio.com/gi/Bella+Hadid+Missoni+Runway+Milan+Fashion+Week+DyZYWbCykd2l.jpg"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                style={{
                  resizeMode: "center",
                  height: 290,
                  width: 190,
                }}
                alt=""
                src="https://i.pinimg.com/originals/d3/bc/33/d3bc332862abb320da45def76e1f017e.jpg"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                style={{
                  resizeMode: "center",
                  height: 290,
                  width: 190,
                }}
                alt=""
                src="https://data.whicdn.com/images/219123435/original.jpg"
              />
            </Col>
          </Row>
        </div>
      </Route>
      <Route path="/">Content</Route>
    </Switch>
  );
}

export default PageContent;
