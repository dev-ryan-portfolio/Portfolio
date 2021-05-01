import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';

import '@styles/contact.css';

const Contact: React.FC = () => (
	<Layout>
		<SEO title='Contact' />
		<div className='contact-container'>
			<h1>More coming soon</h1>
			<ul className='contact-list'>
				<li className='contact-item'>
					<a
						className='contact-link'
						href='https://github.com/RyanCallahan312'
						rel='noopener noreferrer'
						target='_blank'>
						Github
					</a>
				</li>
				<li className='contact-item'>
					<a
						className='contact-link'
						href='mailto:RyanCallahan312@gmail.com'
						rel='noopener noreferrer'
						target='_blank'>
						Email
					</a>
				</li>
			</ul>
		</div>
	</Layout>
);

export default Contact;
