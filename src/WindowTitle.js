import cross_png from "./img/Cross.png";
import maximize_png from "./img/Maximize.png";
import minimize_png from "./img/Minimize.png";
import {useEffect, useState} from "react";

const WindowTitle = ({title, isSelected, setIsSelected}) => {
// const WindowTitle = ({title}) => {
    const [mouseGlobalCoords, setMouseGlobalCoords] = useState({x: 0, y: 0});

    const [globalMouseDown, setGlobalMouseDown] = useState(false)
    // const [globalMouseUp, setGlobalMouseUp] = useState(true)
    const [firstMousePos, setFirstMousePos] = useState({x:0, y:0})
    const [firstWindowPos, setFirstWindowPos] = useState({x:0, y:0})

    const [isFirstPos, setIsFirstPos] = useState(true)
    // const [isSelected, setIsSelected] = useState(false)

    const [deltaMouse, setDeltaMouse] = useState({x: 0, y: 0});

    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
            setMouseGlobalCoords({
                x: event.screenX,
                y: event.screenY,
            });
        };

        const handleMouseDown = event => {
            setGlobalMouseDown(true)
        }
        const handleMouseUp = event => {
            setGlobalMouseDown(false)
        }
        window.addEventListener('mousemove', handleWindowMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
            document.removeEventListener("mousedown", handleMouseDown);
            document.addEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if(isSelected){
            setDeltaMouse({
                x: mouseGlobalCoords.x - firstMousePos.x,
                y: - mouseGlobalCoords.y + firstMousePos.y,
            })
            if(globalMouseDown){
                document.getElementById(title).style.left = `${firstWindowPos.x + deltaMouse.x}px`
                document.getElementById(title).style.top = `${firstWindowPos.y - (deltaMouse.y)}px`
            }
            else {
                no()
            }
        }

    }, [mouseGlobalCoords])

    const yes = () => {
        setIsSelected(true)

        let windowCoords = {
            x: getComputedStyle(document.getElementById(title)).left,
            y: getComputedStyle(document.getElementById(title)).top
        }

        if(isFirstPos){
            setFirstMousePos(mouseGlobalCoords)
            setIsFirstPos(false)

            setFirstWindowPos({
                x: parseFloat(windowCoords.x),
                y: parseFloat(windowCoords.y)
            })
        }
    }

    const no = () => {
        setFirstMousePos({
            x:0,
            y:0
        })
        setDeltaMouse({
            x:0,
            y:0
        })
        setFirstWindowPos({
            x:0,
            y:0
        })
        setIsFirstPos(true)
        setIsSelected(false)
        // stopCounter()
    }

    return(
        <div className="window-title" onMouseDown={yes} onMouseUp={no}>
            <div className="blue-rectangle">
                <p>{title}</p>
                <div className="windows-buttons">
                    <img src={cross_png} alt=""/>
                    <img src={maximize_png} alt=""/>
                    <img src={minimize_png} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default WindowTitle