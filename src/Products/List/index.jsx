import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import { Card } from './Card';
import { Wrapper, GridWrapper } from './styled';

import shoes from './shoes.png';
import shoes2 from './shoes2.png';
import shoes3 from './shoes3.png';

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
            to={'/running/shoes/1'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes2}
            imageAlt={'shoes2.png'}
            isOnSale
            cost={230}
            to={'/running/shoes/2'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes3}
            imageAlt={'shoes3.png'}
            isOnSale
            cost={190}
            to={'/running/shoes/3'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes2}
            imageAlt={'shoes2.png'}
            isOnSale={false}
            cost={170}
            to={'/running/shoes/4'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes3}
            imageAlt={'shoes3.png'}
            isOnSale={false}
            cost={230}
            to={'/running/shoes/5'}
          />
        </Col>
        <Col sm={6} md={4}>
          <Card
            imageUrl={shoes}
            imageAlt={'shoes.png'}
            isOnSale={false}
            cost={190}
            to={'/running/shoes/6'}
          />
        </Col>
      </Row>
    </GridWrapper>
  </Wrapper>
  );
