import {useEffect, useRef, useState} from "react";
import WindowTitle from "./WindowTitle";

const Window = ({windowName, windowFunction, isSelectedOrder, setIsSelectedOrder}) => {
    let name = 'window hidden'
    if(isSelectedOrder.includes(windowName)){
      name = 'window'
    }

    const [isWindowTitleSelected, setIsWindowTitleSelected] = useState(false)
    const [isWindowSelected, setIsWindowSelected] = useState(false)

    useEffect(() => {
        if(isWindowTitleSelected === true || isWindowSelected === true){
            let copy = [...isSelectedOrder]

            copy = copy.filter(element => (
                element !== windowName
            ))

            copy.push(windowName)

            setIsSelectedOrder(copy)
        }
    }, [isWindowTitleSelected, isWindowSelected])



    return(
        <div className={name} id={windowName} onMouseDown={() => (setIsWindowSelected(true))} onMouseUp={() => (setIsWindowSelected(false))}>
            <div className="window-title">
                <WindowTitle title={windowName} isSelected={isWindowTitleSelected} setIsSelected={setIsWindowTitleSelected}/>
            </div>
          {windowFunction}
        </div>
    )
}
export default Window