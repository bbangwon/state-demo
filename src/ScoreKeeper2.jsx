import { useState } from "react";

export default function ScoreKeeper2({numplayers=3, target=5}) {
  const [score, setScore] = useState(new Array(numplayers).fill(0));

//   function incrementScore(i) {
//     setScore((oldScore) => {
//       const newScore = [...oldScore];
//       newScore[i] += 1;
//       return newScore;
//     });    
//   }

const incrementScore = (idx) => { 
    setScore((oldScore) => {
        return oldScore.map((score, i) => {
            if (i === idx) return score + 1;
            return score;
        });
    });
};

  const reset = () => setScore(new Array(numplayers).fill(0));

  return (
    <div>
      <h1>Score Keeper</h1>  
      <ul>
        {score.map((s, i) => (
            <li key={i}>
            Player {i + 1}: {s}
            <button onClick={() => incrementScore(i)}>+</button>
            {s >= target ? "Winner!" : null}
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

