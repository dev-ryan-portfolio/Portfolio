import * as React from 'react';
import '@styles/cardRadial.css';
import { navigate } from 'gatsby';
import { cardToTagMap } from '@constants/cardToTagMap';

interface Props {
	cardPaths: Array<string>;
}

const SkillCardRadial: React.FC<Props> = (props: Props) => {
	const { cardPaths } = props;

	const [selected, setSelected] = React.useState(-1);
	const [filteredPaths, setFilteredPaths] = React.useState([]);
	const handleClick = React.useCallback((index: number): void => {
		setSelected(() => (selected == index ? -1 : index));
		setTimeout(
			() => navigate(`/projects?tags=${encodeURI(cardToTagMap[index])}#search`),
			750,
		);
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

	const ellipse = (x: number): number => {
		let ySquare = 250000 - (x / 1.5) * (x / 1.5);
		ySquare = Math.abs(ySquare);
		return Math.sqrt(ySquare);
	};

	const images: JSX.Element[] =
		filteredPaths &&
		filteredPaths.map((imagePath: string, i: number) => {
			let x: number = 700 * ((2 * i) / 12 - 1);
			let y: number = ellipse(x);
			return (
				<img
					key={imagePath.slice(-15) + i}
					src={imagePath}
					alt='Skill Card'
					width={200}
					className={`skill-card ${
						selected == i && ' skill-card-selected'
					}`}
					style={{
						left: `calc(45% + ${x}px)`,
						bottom: `calc( ${y - 250}px)`,
					}}
					onClick={() => handleClick(i)}
				/>
			);
		});

	return <div className='skill-card-radial-container'>{images}</div>;
};

export default SkillCardRadial;
