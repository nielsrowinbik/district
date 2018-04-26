const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'District',
		siteUrl: 'https://www.district.coffee'
	},
	plugins: [
		'gatsby-plugin-preact',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-remark',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-lodash',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: path.resolve(__dirname, 'src/cms/cms.js')
			}
		},
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: 'UA-76226052-1',
		// 		head: false,
		// 		anonymize: true,
		// 		respectDNT: true
		// 	}
		// },
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'District',
				short_name: 'District',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#ffffff',
				display: 'standalone',
				icon: 'src/icon.png'
			}
		}
	]
};
