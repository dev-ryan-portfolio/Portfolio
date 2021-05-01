import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';

const Resume: React.FC = () => (
	<Layout>
		<SEO title='Resume' />
		<iframe src="/resume.pdf" width="50%" height="100%"/>
	</Layout>
);

export default Resume;
