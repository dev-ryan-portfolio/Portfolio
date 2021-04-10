/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeaderData } from '../types';

import Header from './header';
import './layout.css';

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
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`,
					}}>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href='https://www.gatsbyjs.com'>Gatsby</a>
				</footer>
			</div>
		</>
	);
};

export default Layout;
