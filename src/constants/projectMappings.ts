export interface IProjectInfo {
	name: string;
	description: string;
	base: string;
	displayTags: Array<string>;
	hiddenTags: Array<string>;
}

export const projectMappings: Array<IProjectInfo> = [
	{
		name: 'Losing The Lyrics',
		description: `A web based jackbox style game inspired by tv show Don't Forget The Lyrics. Powered by React with Next.js, Socket.io, and Spotify Web Playback SDK.`,
		base: 'losing-the-lyrics-proj.png',
		displayTags: ['React', 'Next.js', 'Socket.io'],
        hiddenTags: ['react', 'redux', 'node']
	},
	{
		name: 'Highlight-intator',
		description: `A web app to automatically create short highlight videos from Twitch live stream vods. Targeted at small streamers with little resources to help grow thier audience.`,
		base: 'highlight-inator-proj.png',
		displayTags: ['.NET5', 'FFMPEG', 'React'],
        hiddenTags: ['dotnet', 'react', 'redux', 'linux', 'azure', 'microservice', 'docker', 'postgresql'],
	},
	{
		name: 'Chat App Demo',
		description: `A chat app designed as a code-along for a 40 minute computer science club demo. Powered by React with Next.js and Socket.io this lets anyone send messages to a global chat room!`,
		base: 'chat-app-proj.png',
		displayTags: ['React', 'Next.js', 'Socket.io'],
        hiddenTags: ['react', 'node'],
	},
];
