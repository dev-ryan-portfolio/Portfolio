import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import TopProjects from '@components/projectsPage/topProjects';
import '@styles/projects.css';

interface Props{
}
const Projects: React.FC<Props> = () => {
	return (
		<Layout>
			<SEO title='Projects' />
			<div className='headline-grid-container'>
				<div className='headline-text-container'>
					<h1 className='projects-header'>Featured Projects</h1>
				</div>
				<TopProjects/>
			</div>
		</Layout>
	);
};

export default Projects;
