import * as React from 'react';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import '@styles/projects.css';

const Projects: React.FC = () => (
	<Layout>
		<SEO title='Projects' />
		<div className='headline-grid-container'>
			<div className='headline-text-container'>
				<h1 className='projects-header'>Featured Projects</h1>
			</div>
		</div>
	</Layout>
);

export default Projects;
