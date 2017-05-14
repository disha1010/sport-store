import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card';

import shoes from '../../image/shoes.png';
import shoes2 from '../../image/shoes2.png';
import shoes3 from '../../image/shoes3.png';

const Wrapper = styled.div`
  padding-top: 22px;
  padding-left: 24px;
  padding-right: 24px;
`;

export default () => (
  <Wrapper>
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
  </Wrapper>
  );
