import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import { container } from '../mixins';
import Link from 'gatsby-link';

const UnstyledNavigation = ({ children, ...props }) => (
	<header {...props}>
		<div>
			<Link to="/"><Logo /></Link>
			<nav>{ children }</nav>
		</div>
	</header>
);

const Navigation = styled(UnstyledNavigation)`
	height: 76px;

	& > div {
		${container}
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: space-between;

		a {
			color: inherit;
			text-decoration: none;
		}

		& > nav a {
			text-transform: uppercase;
			font-weight: 700;
			padding: 8px 8px;
			margin: 0 10px;
		}
	}
`;

export default Navigation;
