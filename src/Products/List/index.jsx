import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from './Card';

import './style.css';

import shoes from './shoes.png';
import shoes2 from './shoes2.png';
import shoes3 from './shoes3.png';

const GridWrapper = styled.div`
  padding-top: 22px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Wrapper = styled.div`
  width: calc(100% - 414px);
  position: relative;
  left: 414px;
  @media screen and (max-width: 1024px) {
    width: calc(100% - 327px);
    left: 327px;
  }
  @media screen and (max-width: 414px) {
    width: 414px;
    position: relative;
    left: 0px;
  }
`;

export default () => (
  <Wrapper>
    <Filter />
    <GridWrapper>
      <Row>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes}
            imageAlt={'shoes.png'}
            isOnSale
            cost={170}
            to={'/shoe'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes2}
            imageAlt={'shoes2.png'}
            isOnSale
            cost={230}
            to={'/shoe'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes3}
            imageAlt={'shoes3.png'}
            isOnSale
            cost={190}
            to={'/shoe'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes2}
            imageAlt={'shoes2.png'}
            isOnSale={false}
            cost={170}
            to={'/shoe'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes3}
            imageAlt={'shoes3.png'}
            isOnSale={false}
            cost={230}
            to={'/shoe'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes}
            imageAlt={'shoes.png'}
            isOnSale={false}
            cost={190}
            to={'/shoe'}
          />
        </Col>
      </Row>
    </GridWrapper>
  </Wrapper>
);
