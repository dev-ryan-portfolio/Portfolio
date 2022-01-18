import * as React from 'react';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import '@styles/resume.css';

const Resume: React.FC = () => {
	return (
		<Layout>
			<SEO title='Resume' />
			<div className='resume-container'>
				<iframe
					src='https://drive.google.com/file/d/1KX1R2xiUxTOGP0--Sk69GoNK3EfBf5xO/preview'
					className='resume-img'
					allow='autoplay'></iframe>
			</div>
		</Layout>
	);
};

export default Resume;
