import {useEffect, useState} from "react";

const TaskbarButton = ({windowName, isSelectedOrder, setIsSelectedOrder}) => {
    const [myClass, setMyClass] = useState("taskbar-button")

    useEffect(() => {
        if(isSelectedOrder.includes(windowName))
            setMyClass(myClass + ' button-selected')
    },[])

    return (
        <button className={myClass} onClick={() => {
            // console.log(myClass + " " + isSelected + " " + windowName)
            if(isSelectedOrder.includes(windowName)){
                setMyClass("taskbar-button")
                setIsSelectedOrder(isSelectedOrder.filter(element => (
                    element !== windowName
                )))
            }
            else {
                setMyClass("taskbar-button button-selected")
                setIsSelectedOrder([...isSelectedOrder, windowName])
            }
        }}>
            <div className="container">
                <p>{windowName}</p>
            </div>
        </button>
    );
}

export default TaskbarButton