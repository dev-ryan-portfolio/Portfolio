import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { gsap } from 'gsap';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import SkillCardRadial from '@components/skillCard/skillCardRadial';
import SkillCardCarosel from '@components/skillCard/skillCardCarosel';
import '@styles/index.css';
import Loader from '@components/animations/loader';
import { Dispatch, SetStateAction } from 'react';

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
	const animationWrapper: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>();

	const data: CardUrlQuery = useStaticQuery(graphql`
	{
		allFile(filter: {relativeDirectory: {eq: "skillCards"}}, sort: {fields: name}) {
			nodes {
				publicURL
			}
		}
	}
	`);

	const cardPaths = data.allFile.nodes.map((node) => node.publicURL);

	const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1024 });

	const [isLoading, setIsLoading] = React.useState<
		boolean | Dispatch<SetStateAction<boolean>>
	>(true);

	const skillCards = isDesktopOrLaptop ? (
		<SkillCardRadial cardPaths={cardPaths} />
	) : (
		<SkillCardCarosel cardPaths={cardPaths} />
	);

	return isLoading ? (
		<Loader ref={animationWrapper} />
	) : (
		<Layout>
			<SEO title='Home' />
			<div className='headline-grid-container'>
				<div className='headline-text-container'>
					<h1 className='index-header'>👋 I’m Ryan</h1>
					<h3 className='index-header'>a full stack web developer</h3>
					<h3 className='index-header'>
						with a lot of cards in my hand
					</h3>
					{skillCards}
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
