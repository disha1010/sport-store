import React from 'react';
import LabelOnSale from '../../LabelOnSale';
import { InfoWrapper, Name, Price, Colors, Save, ButtonSave, ButtonColor } from './styled';

const gray = {
  main: '#e0e0e0',
};

const blue = {
  main: '#4d87ca',
};
const darkGray = {
  main: '#4a4a4a',
};

const lightGray = {
  main: '#c5c5c5',
};

export default () => (
  <InfoWrapper>
    <Name>ultra boost</Name>
    <Price>190$</Price>
    <Colors>
      <ButtonColor theme={gray} />
      <ButtonColor theme={blue} />
      <ButtonColor theme={darkGray} />
      <ButtonColor theme={lightGray} />
    </Colors>
    <LabelOnSale isDetails />
    <Save>
      <ButtonSave>save</ButtonSave>
    </Save>
  </InfoWrapper>
);
