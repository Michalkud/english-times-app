import React, { Component } from 'react';
import { Carousel, Avatar, Row, Col } from 'antd';
import './styles.css';



class Slider extends Component {

  state={ choices: [], answer: []};


  onChange() {

  }

  render() {
    return (<Carousel afterChange={this.onChange}>
      <div>
        <Col>
          <h1>Present simple</h1>
          <Row style={{ marginTop: 100 }} type="flex" justify="center">
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box"></Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box"></Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box"></Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box"></Avatar>
            </Col>
          </Row>
          <Row style={{ marginTop: 100 }} type="flex" justify="center">
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={160} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
          </Row>
        </Col>
      </div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </Carousel>);
  }

}

export default Slider;
