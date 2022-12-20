import './App.css';
import {StrictMode, useEffect, useLayoutEffect, useState} from "react";
import TaskbarButton from "./TaskbarButton";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";
import Clock from "./Clock";
import Window from "./Window";

function App() {

  const dict = {
    'About': <About/>,
    'Projects': <Projects/>,
    'Work': <Work/>,
    'Education': <Education/>
  }

  let taskbarButtonNames = []
  let windowFunctions = []

  for (const [keys, values] of Object.entries(dict)){
    taskbarButtonNames.push(keys)
    windowFunctions.push(values)
  }

  const [isSelectedOrder, setIsSelectedOrder] = useState(['About', 'Work'])


  useEffect(() => {
    isSelectedOrder.forEach(element => {
      document.getElementById(element).style.zIndex = isSelectedOrder.indexOf(element).toString()
    })
    // console.log(isSelectedOrder)

  },[isSelectedOrder])


  // disable scrolling
  useEffect(() => {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    }
  }, [])

  return (
    <div className="App">

      <body>
        <div id="screen">
          <div id="desktop-container">
            {
              windowFunctions.map(element => {
                let windowName = taskbarButtonNames[windowFunctions.indexOf(element)]
                return(
                    <Window windowName={windowName} windowFunction={element} isSelectedOrder={isSelectedOrder} setIsSelectedOrder={setIsSelectedOrder}/>
                )
              })
            }
          </div>

          <div id="taskbar">
            {/*<div className="start-menu">*/}
            {/*  test*/}
            {/*</div>*/}
            <button id="start-button" className="taskbar-button">
              <div className="container">
                <img src={require('./img/windows-4.png')} alt=""/>
                <p>Start</p>
              </div>
            </button>

            <div className="bar-separator"></div>
            <div className="bar-separator2"></div>

            {taskbarButtonNames.map(e => {
              return (<TaskbarButton windowName={e} isSelectedOrder={isSelectedOrder} setIsSelectedOrder={setIsSelectedOrder}/>)
            })}


            <Clock/>
          </div>

        </div>
      </body>

    </div>
  );
}

export default App;
