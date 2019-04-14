import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from '../components/Home'

const app = express()
           

app.use(express.static(__dirname))          
app.get("/",(req,res) => {
    res.send(ReactDOMServer.renderToString(<Home />))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})