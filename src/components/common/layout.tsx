/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeaderData } from '@types';

import Header from './header';
import '@styles/layout.css';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	const data: HeaderData = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className="layout-grid-container">
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div className="grid-main-container">
				<main>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
