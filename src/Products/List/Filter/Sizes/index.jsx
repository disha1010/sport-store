import React from 'react';
import { Wrapper, Title } from './styled';
import { Button } from '../styled';

export default () => (
  <Wrapper>
    <Title>size</Title>
    <div className="filter-row-values">
      <Button>36</Button>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button>40</Button>
      <Button isActive>41</Button>
      <Button>42</Button>
    </div>
  </Wrapper>
);
