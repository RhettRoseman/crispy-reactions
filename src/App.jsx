import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'


// const treesPic = new URL("/images/trees.jpg", import.meta.url)
function App() {
  // Nav component stays at the top of the entire application 
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
       {/* <img src={treesPic}  /> */}


        <div id="app">
        <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
