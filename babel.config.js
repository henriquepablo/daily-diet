module.exports = (api) => {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@assets': './src/assets',
						'@components': './src/components',
						'@screens': './src/screens',
						'@utils': './src/utils',
						'@services': './src/services',
						'@routes': './src/routes',
						'@styles': './src/styles',
						'@store': './src/store',
					},
				},
			],
		],
	}
}