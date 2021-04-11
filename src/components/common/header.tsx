import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '@styles/header.css';
interface Props {
	siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
	<header className="nav-container">
		<nav>
			<Link to='/' className='logo-link'>
				<StaticImage
					src={'../../images/DevRyanLogo.svg'}
					width={60}
					quality={100}
					formats={['AUTO', 'SVG', 'WEBP']}
					alt='Dev Ryan Logo'
				/>
			</Link>
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
		</nav>
	</header>
);

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
