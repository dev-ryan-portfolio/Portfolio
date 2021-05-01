export interface Metadata {
	name: string;
	content: string;
}

export interface HeaderData {
	site: {
		siteMetadata: {
			title: string;
		};
	};
}

export interface Icons {
	allFile: {
		nodes: [{ publicURL: string; name: string }];
	};
}
