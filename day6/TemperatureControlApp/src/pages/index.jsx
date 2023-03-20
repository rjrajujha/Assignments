import { useState } from "react";
import StylesCSS from "./style.module.css";

const TemperatureApp = () => {

    const [temp, setTemp] = useState(10);

    const incrTemp = () => {
        setTemp(temp + 1)
    }

    const decrTemp = () => {
        setTemp(temp - 1)
    }

    return (
        <>
            <div className={StylesCSS.card}>
                <div className={StylesCSS.temp}>
                    <p className={StylesCSS.tempText}> <span> {temp} </span> <span>&deg;</span> <span>C</span>  </p>
                </div>
                <div className={StylesCSS.tempBtn}>
                    <div className={StylesCSS.incr} onClick={incrTemp}>+</div>
                    <div className={StylesCSS.decr} onClick={decrTemp}>-</div>
                </div>
            </div>
        </>
    )
}

export default TemperatureApp;