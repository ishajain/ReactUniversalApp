const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');


module.exports = (env, argv) => {
    const SERVER_PATH = (argv.mode === 'production') ?'./src/server/server-prod.js' : './src/server/server-dev.js'

    return({
        target: 'node',
        node: {
         // Need this when working with express, otherwise the build fails
         __dirname: false,   // if you don't put this is, __dirname
         __filename: false,  // and __filename return blank or /
       },
        externals: [nodeExternals()],
        entry: {
         server: SERVER_PATH
       },
       output: {
         path: path.join(__dirname, 'dist'),
         filename: '[name].js'
       },
         module:{
             rules: [
                 {
                   // Transpiles ES6-8 into ES5
                   test: /\.js$/,
                   exclude: /node_modules/,
                   use: {
                     loader: "babel-loader"
                   }
                 },
                
             ]
         },
         

    })

   
      
}