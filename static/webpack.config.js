var path = require('path');
const webpack = require('webpack');

// __dirname means the current file location. 
module.exports = {
    entry: {

        home: __dirname + '/src/news_api/index.js',         // for news_api       
        about: __dirname + '/src/slider/index.js'           // for slider
    }, 
    output: {
        path: __dirname + '/dist',                              
        filename: "[name].bundle.js",                             

    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [        // the order of style-loader and the css-loader shouldn't be changed. The webpack see from the buttom of the list! 
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            
                
              },
       
              {
                test: /\.jpg$/,
                use:  [
                    {
                      loader: 'file-loader',
                      options: {}  
                    }
                  ]
            }
         
        ]        
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({

        }

        )
    ] 

};