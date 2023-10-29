import path from "path"

const src = path.resolve(__dirname, "src")
const dist = path.resolve(__dirname, "dist/assets")

export default {
	devtool: "source-map",
	entry: src + "/index.js",
	output: {
		path: dist,
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
