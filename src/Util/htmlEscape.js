const htmlEscapes = {
	'&': '&amp',
	'<': '&lt',
	'>': '&gt',
	'"': '&quot',
	"'": '&#39'
};

export default function escape(string) {
	return string
		.split('')
		.map(char =>
			htmlEscapes[char] !== undefined ? htmlEscapes[char] : char
		)
		.join('');
}
