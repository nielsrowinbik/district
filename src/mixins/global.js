import { css } from 'styled-components';

export default css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	*:focus {
		outline: none;
	}

	html, body {
		color: #222222;
		font-family: arial, sans-serif;
		font-size: 16px;
		font-weight: 300;
		line-height: normal;
		-webkit-font-smoothing: antialiased;
    	-webkit-print-color-adjust: exact;
	}

	body {
		margin: 0;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`;
