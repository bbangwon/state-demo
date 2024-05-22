import './App.css'
// import Counter from './Counter'
// import Dumbo from './Dumbo'
// import ScoreKeeper from './ScoreKeeper'
//import EmojiClicker from './EmojiClicker'
//import ScoreKeeper2 from './ScoreKeeper2'
// import Lucky7 from './Lucky7'
import Dice from './Dice'

function App() {

  return (
    <>
    <Dice dice={[6, 2, 3]} />
    <Dice dice={[1, 2, 3]} color="red" />
    <Dice dice={[1, 5, 4]} />
    {/* <Lucky7 /> */}
    {/* <ScoreKeeper2 numplayers={3} target={5} /> */}
    {/* <EmojiClicker /> */}
      {/* <h1>State Demo</h1>
      <Counter />
      <Dumbo /> */}
    </>
  )
}

export default App
