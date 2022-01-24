import * as React from 'react';

interface Props {
	ref: React.RefObject<HTMLDivElement>;
}

const Loader: React.FC<Props> = (props: Props) => {
	return <div ref={props.ref}>I'm a Loader!</div>;
};

export default Loader;
