import React from 'react';
import './App.css';
import Images from './components/Images';
//import {BrowserRouter,Routes,Route} from "react-router-dom"
//const LazyImages= React.lazy(()=>import("./components/Image"))

function App() {
  return (
    <div className="App">
      <Images/>
    </div>
  );
}

export default App;
