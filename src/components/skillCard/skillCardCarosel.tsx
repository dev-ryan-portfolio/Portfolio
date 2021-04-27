import * as React from 'react';
import '@styles/skillCardCarosel.css';
import { navigate } from 'gatsby';
import { cardToTagMap } from '@constants/cardToTagMap';
import { useMediaQuery } from 'react-responsive';
import { useStaticQuery, graphql } from 'gatsby';

interface ArrowQuery {
	allFile: {
		nodes: [
			{
				publicURL: string;
			},
		];
	};
}
interface Props {
	cardPaths: Array<string>;
}

const SkillCardCarosel: React.FC<Props> = (props: Props) => {
	const arrow: ArrowQuery = useStaticQuery(graphql`
	{
		allFile(filter: {relativeDirectory: {eq: ""}, name: {eq: "arrow"} }) {
			nodes {
				publicURL
			}
		}
	}
	`);

	const { cardPaths } = props;

	const [selected, setSelected] = React.useState(0);
	const [filteredPaths, setFilteredPaths] = React.useState([]);

	const handleCardClick = React.useCallback((index: number): void => {
		setSelected(() => (selected == index ? -1 : index));
		navigate(`/projects?tags=${encodeURI(cardToTagMap[index])}#search`);
	}, []);

	const handleArrowClick: Function = (direction: number) => {
		if (selected === 0 && direction === -1) {
			setSelected(filteredPaths.length-1);
		} else if (selected == filteredPaths.length-1 && direction == 1) {
			setSelected(0);
		} else {
			setSelected((selected) => selected + direction);
		}
	};

	React.useEffect(() => {
		let tempFilteredPaths = [];
		let offset: number = 0;
		for (let i: number = 0; i < cardPaths.length; i += 4) {
			offset = Math.floor(Math.random() * 4);
			tempFilteredPaths.push(cardPaths[i + offset]);
		}
		setFilteredPaths(tempFilteredPaths);
	}, []);

	const smallScreen = useMediaQuery({ minDeviceHeight: 700 });

	return (
		<div className='skill-card-list-container'>
			<button className='noshow' onClick={() => handleArrowClick(-1)}>
				<img
					src={arrow.allFile.nodes[0].publicURL}
					className='arrow left'
					alt='left arrow'
				/>
			</button>
			<img
				src={filteredPaths[selected]}
				alt='Skill Card'
				width={smallScreen ? 280 : 200}
				className={`skill-card-list`}
				onClick={() => handleCardClick(selected)}
			/>
			<button className='noshow' onClick={() => handleArrowClick(1)}>
				<img
					src={arrow.allFile.nodes[0].publicURL}
					className='right arrow'
					alt='right arrow'
				/>
			</button>
		</div>
	);
};

export default SkillCardCarosel;
