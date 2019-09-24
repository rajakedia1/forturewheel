module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js'
	},
	optimization: {
		minimize: true
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}