export interface IProjectInfo {
	name: string;
	description: string;
	base: string;
	displayTags: Array<string>;
	hiddenTags: Array<string>;
	github: string;
	demo?: string;
	isPronounced?: boolean;
}

export const projectMappings: Array<IProjectInfo> = [
	{
		name: 'Losing The Lyrics',
		description: `A web based jackbox style game inspired by the 2007 tv show 'Don't Forget The Lyrics'. Powered by React with Next.js, Socket.io, and Spotify Web Playback SDK.`,
		base: 'losing-the-lyrics-proj.png',
		displayTags: ['React', 'Next.js', 'Socket.io'],
		hiddenTags: ['react', 'redux', 'node'],
		github: 'https://github.com/RyanCallahan312/losing-the-lyrics',
		demo: 'http://losing-the-lyrics.devryan.io/',
	},
	{
		name: 'Highlight-intator',
		description: `A web app to automatically create short highlight videos from Twitch live stream vods. Targeted at small streamers to help grow thier audience. (demo disabled due to hosting costs)`,
		base: 'highlight-inator-proj.png',
		displayTags: ['.NET5', 'FFMPEG', 'React'],
		hiddenTags: [
			'dotnet',
			'react',
			'redux',
			'linux',
			'azure',
			'microservice',
			'docker',
			'postgresql',
		],
		github: 'https://github.com/auto-highlighter',
		isPronounced: true,
	},
	{
		name: 'Chat App Demo',
		description: `A chat app designed as a code-along for a 40 minute computer science club demo. Powered by React with Next.js and Socket.io this lets anyone send messages to a global chat room!`,
		base: 'chat-app-proj.png',
		displayTags: ['React', 'Next.js', 'Socket.io'],
		hiddenTags: ['react', 'node'],
		github: 'https://github.com/RyanCallahan312/chat-app',
		demo: 'http://chat-room.bsucomputerscienceclub.com/',
	},
];
