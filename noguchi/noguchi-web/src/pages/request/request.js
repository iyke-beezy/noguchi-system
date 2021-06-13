import React, { useEffect, useState } from "react";
import { List, Drawer, Button, Divider, Row, Col, Switch, message } from "antd";
import {} from "@ant-design/icons";
import Axios from "axios";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export const Request = () => {
  const [filteredSurveys, setFilteredSurveys] = useState([]);
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    async function fetchSurveys() {
      await Axios.get("http://localhost:1337/surveys")
        .then((res) => {
          if (res.data) {
            setSurveys(res.data);
            setFilteredSurveys(
              res.data.filter((dat) => dat.evaluated === null)
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchSurveys();
  }, []);

  const [orgs, setOrgs] = useState([]);
  useEffect(() => {
    async function fetchOrgs() {
      await Axios.get("http://localhost:1337/organizations")
        .then((res) => {
          if (res.data) {
            setOrgs(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchOrgs();
  }, []);
  console.log(orgs, filteredSurveys);

  const [visible, setVisible] = useState(false);
  const [clickedSurvey, setClickedSurvey] = useState([]);
  return (
    <>
      <Drawer
        title="Details"
        placement="right"
        width="50%"
        closable={true}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <div
          style={{
            zIndex: 100000000000,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ textAlign: "left" }}>
            Recorded for {clickedSurvey.community?.Community}
          </h1>
          <h3 style={{ textAlign: "left", color: "steelblue" }}>
            {clickedSurvey.published_at?.slice(0, 10)}
          </h3>

          <Row style={{ width: "100%" }}>
            <Col md={24}>
              {clickedSurvey.answers?.map((answer, index) => (
                <Row
                  key={index}
                  style={{
                    width: "100%",
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderBottom: "1px solid whitesmoke",
                  }}
                >
                  <Col md={12}>
                    <b>{answer.question.Keyword}</b>
                  </Col>
                  <Col md={12}>
                    {typeof answer.answer === "object" ? (
                      answer.answer.length > 0 ? (
                        typeof answer.answer[0] === "object" ? (
                          <>
                            <Row style={{ width: "100%" }}>
                              {Object.keys(answer.answer[0]).map((key) => (
                                <Col md={12}>
                                  <b>{key}</b>
                                </Col>
                              ))}
                            </Row>
                            <Row style={{ width: "100%" }}>
                              <Col md={24}>
                                {answer.answer.map((ans, index) => (
                                  <Row
                                    style={{
                                      borderBottom: "1px dashed whitesmoke",
                                      paddingBottom: 5,
                                      paddingTop: 5,
                                    }}
                                  >
                                    {Object.values(ans).map((key) => (
                                      <Col md={12}>{key}</Col>
                                    ))}
                                  </Row>
                                ))}
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Row style={{ width: "100%" }}>
                            <Col md={24}>
                              {answer.answer.map((ans, index) => (
                                <text style={{ display: "block" }} key={index}>
                                  {ans}
                                </text>
                              ))}
                            </Col>
                          </Row>
                        )
                      ) : (
                        "empty object"
                      )
                    ) : typeof answer.answer === "boolean" ? (
                      answer.answer.toString()
                    ) : (
                      answer.answer
                    )}
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </div>
      </Drawer>

      <Divider orientation="left">Requests</Divider>
      <List
        size="large"
        header={<div></div>}
        bordered
        dataSource={filteredSurveys}
        renderItem={(item) => (
          <List.Item>
            <Row style={{ width: "100%" }}>
              <Col
                md={22}
                onClick={() => {
                  setClickedSurvey(item);
                  setVisible(true);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h2>{item.surveyUID}</h2>
                <text style={{ fontSize: "10px" }}>
                  by{" "}
                  {item.org_user.organization
                    ? orgs.filter(
                        (org) => org.id == item.org_user.organization
                      )[0]?.name
                    : ""}
                </text>
              </Col>
              <Col md={2}>
                <Switch
                  onChange={() => {
                    /* console.log('turned') */

                    Axios.put("http://localhost:1337/surveys/" + item.id, {
                      evaluated: true,
                    })
                      .then((res) => {
                        if (res.data) {
                          message.success("Survey has been evaluated");
                          window.location.href = "/admin";
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                />
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </>
  );
};
