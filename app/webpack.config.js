var path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist", "assets"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:5]",
							},
						},
					},
				],
			},
		]
	}
};
