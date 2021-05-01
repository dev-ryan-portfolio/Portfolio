import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import TopProjects from '@components/projectsPage/topProjects';
import '@styles/projects.css';
import {Icons} from '@types'

interface Props{
	data: Icons
}
const Projects: React.FC<Props> = ({data}) => {
	console.log(data)
	return (
		<Layout>
			<SEO title='Projects' />
			<div className='headline-grid-container'>
				<div className='headline-text-container'>
					<h1 className='projects-header'>Featured Projects</h1>
				</div>
				<TopProjects icons={data}/>
			</div>
		</Layout>
	);
};

export default Projects;

export const query = graphql`
{
	allFile(
		filter: {relativeDirectory: {eq: "icons"}, name: {in: ["eye-white", "git-white", "no-eye-white"]}}
	) {
		nodes {
			publicURL
			name
		}
	}
}
`;
