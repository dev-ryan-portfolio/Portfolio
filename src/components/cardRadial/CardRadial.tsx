import * as React from 'react';
import '@styles/cardRadial.css'

interface Props {
	cardPaths: Array<string>;
}

const CardRadial: React.FC<Props> = (props: Props) => {
	const { cardPaths } = props;

	let filteredPaths: Array<string> = [];
	let offset: number = 0;
	for (let i: number = 0; i < cardPaths.length; i += 4) {
		offset = Math.floor(Math.random() * 4);
		console.log(i, offset, cardPaths[i + offset]);
		filteredPaths.push(cardPaths[i + offset]);
	}

	const images: JSX.Element[] =
		filteredPaths &&
		filteredPaths.map((imagePath: string, i) => {
			return (
				<img
					key={imagePath.slice(-15) + i}
					src={imagePath}
					alt='Skill Card'
					width={150}
					className='skill-card'
				/>
			);
		});

	return <div className='skill-card-radial-container'><div className='skill-card-base'>{images}</div></div>;
};

export default CardRadial;
