import { useState, useEffect } from "react";

export default function CounterEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(function myEffect(){
        console.log("I'm in the effect!");
    }, []);
    const increment = () => setCount(count + 1);
    const handleChange = (e) => setName(e.target.value);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <p>{name}</p>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}