import { useState, useEffect } from "react";

export default function CounterEffect() {
    const [count, setCount] = useState(0);
    useEffect(function myEffect(){
        console.log("I'm in the effect!");
    });
    const increment = () => setCount(count + 1);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}