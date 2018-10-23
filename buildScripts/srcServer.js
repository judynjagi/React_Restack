import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

// adding a route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

// tell server which port to listen to
app.listen(port, function(err){
  if(err){
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
