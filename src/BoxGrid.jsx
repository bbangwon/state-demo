import Box from "./Box";
import { useState } from "react";

function BoxGrid(){
    const [boxes, setBoxes] = useState([false, false, false, false, false, false, false, false, false]);
    const reset = () => {
        setBoxes(boxes.map(() => false));
    }

    const toggleBox = (index) => {
        setBoxes(boxes.map((box, i) => i === index ? !box : box));
    }

    return (
        <div className="BoxGrid">
            {boxes.map((isActive, index) => (
                <Box key={index} isActive={isActive} toggle={() => toggleBox(index)}  />
            ))}

            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default BoxGrid;