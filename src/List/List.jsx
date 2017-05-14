import React from 'react';
import Card from './Card';
import { Grid } from 'react-flexbox-grid';
import { Row } from 'react-flexbox-grid';
import { Col } from 'react-flexbox-grid';
const shoes = require('../image/shoes.png');
const shoes2 = require('../image/shoes2.png');
const shoes3 = require('../image/shoes3.png');
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 22px;
  padding-left: 24px;
  padding-right: 24px;
`;

export default () => (
  <Wrapper>
    <Grid fluid>
      <Row>
        <Col md={4}>
          <Card
            imageUrl={shoes}
            imageAlt={'shoes.png'}
            isOnSale
            cost={170}
          />
        </Col>
        <Col md={4}>
          <Card
            imageUrl={shoes2}
            imageAlt={'shoes2.png'}
            isOnSale
            cost={230}
          />
        </Col>
        <Col md={4}>
          <Card
            imageUrl={shoes3}
            imageAlt={'shoes3.png'}
            isOnSale
            cost={190}
            to={'/shoe'}
          />
        </Col>
        <Col md={4}>
          <Card
            imageUrl={shoes2}
            imageAlt={'shoes2.png'}
            isOnSale={false}
            cost={170}
          />
        </Col>
        <Col md={4}>
          <Card
            imageUrl={shoes3}
            imageAlt={'shoes3.png'}
            isOnSale={false}
            cost={230}
          />
        </Col>
        <Col md={4}>
          <Card
            imageUrl={shoes}
            imageAlt={'shoes.png'}
            isOnSale={false}
            cost={190}
          />
        </Col>
      </Row>
    </Grid>
  </Wrapper>
  );
