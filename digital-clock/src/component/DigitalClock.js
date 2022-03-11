
import {useState} from 'react'
import './DigitalClock.css'

export default function DigitalClock(){

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    setInterval(()=>{
        const currentTime = new Date;
        setHours(currentTime.getHours());
        setMinutes(currentTime.getMinutes());
        setSeconds(currentTime.getSeconds())
    }, 1000)

    return(
        <section>
            <span ClassName='hours'> {hours} </span>:
            <span ClassName='minutes'> {minutes} </span>:
            <span ClassName='seconds'> {seconds} </span>
        </section>
    );
}