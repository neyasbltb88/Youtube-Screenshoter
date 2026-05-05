const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CustomHotUpdateStrategy = require('webpack-custom-hot-update-strategy');
const updateFetchEval = require('webpack-custom-hot-update-strategy/strategies/update/hotDownloadUpdateChunkFetchEval');

// Custom plugin to generate userscript file
class UserscriptPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('UserscriptPlugin', (stats) => {
            const distPath = path.resolve(__dirname, 'dist');
            const metaPath = path.resolve(__dirname, 'src/userscript.meta.txt');
            const indexJsPath = path.resolve(distPath, 'index.js');
            const userscriptPath = path.resolve(distPath, 'index.user.js');

            const metaContent = fs.readFileSync(metaPath, 'utf8');
            const indexContent = fs.readFileSync(indexJsPath, 'utf8');

            const userscriptContent = metaContent + '\n' + indexContent;
            fs.writeFileSync(userscriptPath, userscriptContent, 'utf8');

            console.log('Userscript generated: dist/index.user.js');
        });
    }
}

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV = NODE_ENV === 'development';

const { publicPath } = require('./base.config.js');
const devServerConfig = require('./dev-server.config.js');

config = {
    mode: NODE_ENV,
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './index'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath
    },

    watch: DEV,
    watchOptions: {
        aggregateTimeout: 100
    },

    devServer: devServerConfig,

    // devtool: DEV ? 'eval-inline-source-map' : false,
    devtool: DEV ? 'inline-source-map' : false,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            title: 'JSX Test',
            template: './index.html'
        }),
        new CustomHotUpdateStrategy({
            update: updateFetchEval
        }),
        new UserscriptPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript', ['@babel/preset-env', { targets: 'defaults' }]],
                        plugins: [
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-jsx',
                            ['@babel/plugin-transform-react-jsx', { 'pragma': 'dom' }]
                        ]
                    }
                }
            },
            {
                test: /\.txt$|\.png$|\.jpg$|\.jpeg$|\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentWidth: 4
                            }
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['index.js', '.js', '.jsx', '.ts', '.tsx', '*'],
        alias: {
            '@utils': path.resolve(__dirname, './src/utils')
        }
    }
};

module.exports = config;
