import 'typeface-aleo';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import { injectGlobal } from 'styled-components';
import { global } from '../mixins';
import Link from 'gatsby-link';

injectGlobal`${global}`;

class TemplateWrapper extends Component {
	state = {}

	render = () => {
		const { children } = this.props;
		const {} = this.state;

		return (
			<div id="app">
				<Helmet
					defaultTitle="District - Brood & Koffie"
					titleTemplate="%s - District"
				/>
				<Navigation>
					<Link to="/brood">Brood</Link>
					<Link to="/koffie">Koffie</Link>
					<Link to="/over">Over</Link>
					<Link to="/contact">Contact</Link>
				</Navigation>
				{ children() }
			</div>
		);
	}
}

export default TemplateWrapper;
