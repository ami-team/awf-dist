/*!
 * AMI Web Framework
 *
 * Copyright (c) 2014-{{CURRENT_YEAR}} The AMI Team, CNRS/LPSC
 *
 * This file must be used under the terms of the CeCILL-C:
 * http://www.cecill.info/licences/Licence_CeCILL-C_V1-en.html
 * http://www.cecill.info/licences/Licence_CeCILL-C_V1-fr.html
 *
 */

/*--------------------------------------------------------------------------------------------------------------------*/

const BROWSER_LIST = [
	'defaults',
	'not ie 11',
	'not ie_mob 11'
];

/*--------------------------------------------------------------------------------------------------------------------*/

console.log(`Building for: ${BROWSER_LIST.join(', ')}`);

/*--------------------------------------------------------------------------------------------------------------------*/

const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/*--------------------------------------------------------------------------------------------------------------------*/

function getResourceDirectory(filename)
{
	switch(path.extname(filename))
	{
		case '.gif':
		case '.png':
		case '.jpg':
		case '.jpeg':
		case '.svg':
			return 'images';

		case '.wasm':
			return 'wasm';

		default:
			return 'others';
	}
}

/*--------------------------------------------------------------------------------------------------------------------*/

const config = {
	'entry': {

	},
	'output': {
		'filename': '[name].min.js',
		'chunkFilename': 'assets/js/chunks/[id].min.js',
		'path': path.resolve(__dirname),
		'assetModuleFilename': (o) => path.join(path.dirname(o.runtime), 'assets', getResourceDirectory(o.filename), '[hash][ext][query]')
	},
	'devServer': {
		'static': {
			'directory': path.join(__dirname, './'),
		}
	},
	'module': {
		'rules': [
			/*--------------------------------------------------------------------------------------------------------*/

			{
				'test': /\.js$/,
				'use': {
					'loader': 'babel-loader',
					'options': {
						'shouldPrintComment': () => false,
						'plugins': [
							['@babel/plugin-transform-for-of', {
								'loose': true
							}]
						],
						'presets': [
							['@babel/preset-env', {
								'loose': true,
								'targets': BROWSER_LIST
							}]
						]
					}
				}
			},

			/*--------------------------------------------------------------------------------------------------------*/

			{
				'type': 'asset/source',
				'test': /\.twig$/,
				'exclude': /node_modules/
			},

			/*--------------------------------------------------------------------------------------------------------*/

			{
				'type': 'asset/source',
				'test': /\.(json|yml|xml)$/,
				'exclude': /node_modules/
			},

			/*--------------------------------------------------------------------------------------------------------*/

			{
				'type': 'asset/resource',
				'test': /\.wasm$/
			},

			/*--------------------------------------------------------------------------------------------------------*/

			{
				'type': 'asset/resource',
				'test': /\.(gif|png|jpg|jpeg|svg)$/,
				'exclude': /node_modules/
			},

			/*--------------------------------------------------------------------------------------------------------*/

			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						'loader': 'postcss-loader',
						'options': {
							'postcssOptions': {
								'plugins': [
									['autoprefixer', {}]
								]
							}
						}
					}
				]
			}

			/*--------------------------------------------------------------------------------------------------------*/
		]
	},
	'externals': {
		'jquery': 'jQuery',
		'moment': 'moment',
		'select2': 'select2'
	},
	'plugins': [
		new ESLintPlugin({
			'failOnWarning': true
		})
	],
	'optimization': {
		'minimizer': [
			new TerserPlugin({
				'test': /\.min\.js$/,
				'parallel': true,
				'extractComments': () => false,
				'terserOptions': {
					'mangle': true
				}
			})
		]
	},
	'performance' : {
		'hints': false
	}
};

/*--------------------------------------------------------------------------------------------------------------------*/

module.exports = config;

/*--------------------------------------------------------------------------------------------------------------------*/
