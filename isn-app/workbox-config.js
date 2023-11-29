module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{ico,png,html,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};