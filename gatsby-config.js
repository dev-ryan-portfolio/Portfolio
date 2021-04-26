const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Dev Ryan Portfolio`,
		description: `I'm Dev Ryan and I'm looking for 2021 Summer Internships!`,
		author: `Ryan Callahan`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/DevRyanLogo.svg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto`,
				],
				display: 'swap',
			},
		},
		`gatsby-plugin-tsconfig-paths`,
		`gatsby-plugin-gatsby-cloud`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
