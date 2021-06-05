import React, { useState } from "react";
import { Row, Col, Input, List, Button, Modal } from "antd";
import { SendOutlined } from "@ant-design/icons";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const EvaluationSession = () => {
  const [modalState, setModalState] = useState(true);
  return (
    <div className="profilePage">
      <Modal
        className="modal"
        title="Enter Evaluation Key"
        width={500}
        visible={modalState}
        centered
        maskStyle={{
          backgroundColor: "#6461ff",
          opacity: 0.95,
        }}
        footer={[]}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Input
            type="text"
            size="large"
            style={{ width: "45%", minWidth: 300 }}
          />
          <Button
            type="primary"
            style={{ height: "auto" }}
            onClick={() => setModalState(false)}
          >
            Enter
          </Button>
        </div>
      </Modal>
      <Row style={{ width: "100%", height: "100vh", padding: 30 }}>
        <Col
          md={16}
          style={{
            backgroundColor: "white",
            height: "100%",
            boxShadow: "1px 1px 2px 1px lightgrey",
          }}
        ></Col>
        <Col md={8} style={{ paddingLeft: "20px" }}>
          <span
            style={{
              display: "block",
              textAlign: "left",
              fontSize: 14,
              marginBottom: 3,
            }}
          >
            Comments
          </span>
          <div style={{ display: "flex" }}>
            <Input.TextArea
              size="large"
              style={{
                borderRadius: "20px",
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
            />
            <Button
              type="primary"
              style={{
                height: "auto",
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <SendOutlined />
            </Button>
          </div>
          <List
            size="large"
            dataSource={data}
            style={{ height: "65vh", overflowY: "scroll", marginTop: "20px" ,marginBottom: "10px" }}
            loadMore
            renderItem={(item) => (
              <List.Item
                style={{
                  minHeight: 80,
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ display: "block", textAlign: "left", fontSize: 15 }}
                >
                  {item}
                </span>
                <text
                  style={{
                    display: "block",
                    alignSelf: "flex-end",
                    color: "steelblue",
                  }}
                >
                  UNICAF
                </text>
              </List.Item>

            )}
          />
          <Button size='middle' block>Load More</Button>
        </Col>
      </Row>
    </div>
  );
};

export default EvaluationSession;
