var path = require('path');
var webpack = require('webpack');
var Hwpi = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'dist');

module.exports = {
	
	entry : {app: path.resolve(APP_PATH,'index.jsx')},
	output : {
		path: BUILD_PATH,
		filename : 'bundle.js'
	},
	devtool: 'eval-source-map',
	devServer : {
		historyApiFallback :true,
		hot:true,
		inline:true,
		progess:true
	},
	module: {
		loaders:[
		{
			test:/\.css$/,
			loader: 'style!css'
		},
		{
			test:/\.(png|jpg)$/,
			loader : 'url?limit=8192'
		},
		{
			test:/\.jsx?$/,
			loader:'babel',
			include : APP_PATH
		}

		]
	},
	plugins :[
	new Hwpi({
		title:"Roy's React-Boilerplate",
		template: 'app/index.tpl.html',
		inject: 'body',
		filename: 'index.html'
	})
	],
	resolve : {
		extensions : ['','.js','.jsx']
	}
}