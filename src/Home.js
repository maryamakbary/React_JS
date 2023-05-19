import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Home = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setloading(true);
      const { data } = await axios.get("http://kzico.runflare.run/product/");
      setloading(false);
      setProduct(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="home">
        {loading ? (
          <Loading />
        ) : error ? (
          <Badge bg="danger">error</Badge>
        ) : (
          <div>
            <Navbar />
            <Container>
              <Row>
                {product.slice(14).map((item, index) => {
                  return (
                    <Col xs="4" key={item._id}>
                      <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                      ></link>
                      <div
                        className=" page-wrapper"
                        style={{
                          marginTop: "30px",
                          boxShadow: "grey 0px 0px 11px 0px",
                        }}
                        onClick={() => navigate(`/Product/${item._id}`)}
                      >
                        <div
                          className="page-inner"
                          style={{ marginTop: "100px" }}
                        >
                          <div className="rowHome">
                            <div className="el-wrapper">
                              <div className="box-up">
                                <div
                                  className="imgHome"
                                  style={{
                                    backgroundImage: `url(${item.image})`,
                                  }}
                                ></div>
                                <div className="img-info">
                                  <div className="info-inner">
                                    <span className="p-name">{item.name}</span>
                                  </div>
                                  <div className="a-size">
                                    {item.countInStock
                                      ? "Available"
                                      : "unavailable"}
                                  </div>
                                </div>
                              </div>

                              <div className="box-down">
                                <div className="h-bg">
                                  <div className="h-bg-inner"></div>
                                </div>

                                <a className="cart" href="#">
                                  <span className="price">${item.price}</span>
                                  <span className="add-to-cart">
                                    <span className="hint-star star">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      >
                                        <span
                                          style={{
                                            marginLeft: "10px",
                                            fontFamily: "Lato",
                                            fontWeight: "bolder",
                                          }}
                                        >
                                          ({item.rating})
                                        </span>
                                      </i>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
