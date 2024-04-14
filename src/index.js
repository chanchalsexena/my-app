// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
 App.arguments(express.static("./build"));
 application.get("*",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./build/index.html"));
 });
 App.listen(port,()=>{
    console.log('App listening on port ${port}');})
