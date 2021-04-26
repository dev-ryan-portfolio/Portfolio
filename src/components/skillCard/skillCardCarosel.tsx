import * as React from 'react';
import '@styles/skillCardCarosel.css';
import { navigate } from 'gatsby';
import { cardToTagMap } from '@constants/cardToTagMap';

interface Props {
	cardPaths: Array<string>;
}

const SkillCardCarosel: React.FC<Props> = (props: Props) => {
	const { cardPaths } = props;

	const [selected, setSelected] = React.useState(0);
	const [filteredPaths, setFilteredPaths] = React.useState([]);

	const handleClick = React.useCallback((index: number): void => {
		setSelected(() => (selected == index ? -1 : index));
		navigate(`/projects?tags=${encodeURI(cardToTagMap[index])}#search`);
	}, []);

	React.useEffect(() => {
		let tempFilteredPaths = [];
		let offset: number = 0;
		for (let i: number = 0; i < cardPaths.length; i += 4) {
			offset = Math.floor(Math.random() * 4);
			tempFilteredPaths.push(cardPaths[i + offset]);
		}
		setFilteredPaths(tempFilteredPaths);
	}, []);

	return (
		<div className='skill-card-list-container'>
			{
				//arrow left
			}
			<img
				src={filteredPaths[selected]}
				alt='Skill Card'
				width={200}
				className={`skill-card-list`}
				onClick={() => handleClick(selected)}
			/>
			{
				//arrow right
			}
		</div>
	);
};

export default SkillCardCarosel;
