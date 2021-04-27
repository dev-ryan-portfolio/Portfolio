import * as React from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { useStaticQuery, graphql } from 'gatsby';

import '@styles/header.css';

interface Props {
	siteTitle: string;
}

interface Logo {
	allFile: {
		nodes: [{ publicURL: string }];
	};
}

const Header = ({ siteTitle }: Props) => {
	const smallScreen = useMediaQuery({ minDeviceWidth: 495 });

	const devRyanLogo: Logo = useStaticQuery(graphql`
	{
		allFile(filter: {relativeDirectory: {eq: ""}, name: {eq: "DevRyanLogo"}}, sort: {fields: name}) {
			nodes {
				publicURL
			}
		}
	}
    `);

	const pageLinks = (
		<ul>
			<li>
				<Link to='/blog' className='page-link'>
					Blog
				</Link>
			</li>
			<li>
				<Link to='/resume' className='page-link'>
					Resume
				</Link>
			</li>
			<li>
				<Link to='/projects' className='page-link'>
					Projects
				</Link>
			</li>
			<li>
				<Link to='/contact' className='page-link'>
					Contact
				</Link>
			</li>
		</ul>
	);

	const burgerMenu = (
		<button className='burger-menu'>
			<span className='burger-menu' />
			<span className='burger-menu' />
			<span className='burger-menu' />
		</button>
	);

	return (
		<header className='nav-container'>
			<nav>
				<Link to='/' className='logo-link'>
					<img
						className='logo'
						src={devRyanLogo.allFile.nodes[0].publicURL}
						alt='Dev Ryan Logo'
					/>
				</Link>
				{smallScreen ? pageLinks : burgerMenu}
			</nav>
		</header>
	);
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
