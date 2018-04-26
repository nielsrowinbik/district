import React from 'react';
import styled from 'styled-components';
import { isNumber } from 'lodash';

const UnstyledLogo = (props) => <h1 {...props}>district</h1>;

const Logo = styled(UnstyledLogo)`
	font-family: "Aleo", arial, sans-serif;
	font-size: ${({ size }) => isNumber(size) ? `${size}px` : size || '2rem'};
	letter-spacing: 0.23em;
`;

export default Logo;
