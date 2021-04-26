import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import '@styles/index.css';
import CardRadial from '@components/cardRadial/CardRadial';

interface CardUrlQuery {
	allFile: {
		nodes: [
			{
				publicURL: string;
			},
		];
	};
}

const IndexPage: React.FC = () => {
	const data: CardUrlQuery = useStaticQuery(graphql`
	{
		allFile(filter: {relativeDirectory: {eq: "skillCards"}}) {
			nodes {
				publicURL
			}
		}
	}
	`);

	const cardPaths = data.allFile.nodes.map((node) => node.publicURL);

	const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

	return (
		<Layout>
			<SEO title='Home' />
			<div className='headline-grid-container'>
				<div className='headline-text-container'>
					<h1 className='index-header'>👋 I’m Ryan</h1>
					<h3 className='index-header'>a full stack web developer</h3>
					<h3 className='index-header'>
						with a lot of cards in my hand
					</h3>
				</div>
				{isDesktopOrLaptop ? (
					<CardRadial cardPaths={cardPaths} />
				) : (
					<h1>small screen</h1>
				)}
			</div>
		</Layout>
	);
};

export default IndexPage;
