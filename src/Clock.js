import {useEffect, useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return (() => (clearInterval(interval)))
    }, [])


    return(
        <div id="clock">
            <p>{time.getHours() + ":" + time.getMinutes()}</p>
        </div>
    )
}
export default Clock