
import {useState} from 'react'
import './DigitalClock.css'

export default function DigitalClock(){

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [selectedCity, setSelectedCity] = useState('Tokyo');

    const cityList = [
        {name: 'Tokyo', offset: 8},
        {name: 'Zurich', offset: 0},
        {name: 'New York', offset: -6}
    ]
    function changeCity(event){
        const city = event.target.value;
        setSelectedCity(city);
    }

    function getOffsetOfSelectedCity(){
        return cityList
            .filter((city) => city.name == selectedCity)
            .map((city) => city.offset)[0];
    }

    setInterval(()=>{
        const hourOffset = getOffsetOfSelectedCity();
        const currentTime = new Date;
        currentTime.setHours(currentTime.getHours()+ hourOffset);

        setHours(currentTime.getHours());
        setMinutes(currentTime.getMinutes());
        setSeconds(currentTime.getSeconds())
    }, 1000)

    return(
        <main>
            <h1>World Digital Clock</h1>
            <section>

                <div>{selectedCity}</div>

                <span ClassName='hours'> {hours} </span>:
                <span ClassName='minutes'> {minutes} </span>:
                <span ClassName='seconds'> {seconds} </span>

             </section>

             <select onChange={changeCity}>
                 {
                     cityList.map((city)=> <option>{city.name}</option>)
                 }
             </select>

        </main>
        
    );
}