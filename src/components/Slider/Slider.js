import React, { Component } from 'react';
import { Carousel, Avatar, Row, Col } from 'antd';
import './styles.css';



class Slider extends Component {


  onChange() {

  }

  render() {
    return (<Carousel afterChange={this.onChange}>
      <div>
        <Col>
          <Row type="flex" justify="center">
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
            </Col>
            <Col className="gutter-row" span={3}>
              <Avatar size={128} shape="square" className="gutter-box">col-6</Avatar>
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
