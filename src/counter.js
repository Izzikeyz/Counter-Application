import { useState } from "react";

const Counter = () => {
    let [number, setNumber] = useState(0);

    const clickIncrease = () => {
        setNumber(number += 1);
    };

    const clickDecrease = () => {
        setNumber(number -= 1);
    };

    return (
        <div>
            <h2>My Counter Application</h2>
            <button onClick={clickIncrease}>increase</button>
            <p>{ number }</p>
            <button onClick={clickDecrease}>decrease</button>
        </div>
      );
}
 
export default Counter;