import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeaderData } from '@types';

import Header from './header';
import '@styles/layout.css';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props>  = ({ children }: Props) => {
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
