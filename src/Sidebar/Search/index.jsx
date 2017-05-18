import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Icon, Input } from './styled';

import search from './search.png';

export const SearchInput = props => (
  <Wrapper center="md">
    <Icon src={search} alt="search-icon" />
    <Input type="text" name="search" value={props.value} />
  </Wrapper>
);

SearchInput.propTypes = {
  value: PropTypes.string,
};
SearchInput.defaultProps = {
  value: '',
};

export default SearchInput;
