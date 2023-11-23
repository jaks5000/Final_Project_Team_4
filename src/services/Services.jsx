import React from "react";

import { Container, Row, Col } from "reactstrap";
import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion";
import "./services.css";
const Services = () => {
  return (
    <section className="services text-center">
      <Container className="pt-5">
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{
                  background: `${item.bg}`,
                }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3 className="mt-2">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
