import './App.css'
// import Counter from './Counter'
// import Dumbo from './Dumbo'
// import ScoreKeeper from './ScoreKeeper'
//import EmojiClicker from './EmojiClicker'
//import ScoreKeeper2 from './ScoreKeeper2'
// import Lucky7 from './Lucky7'
// import LuckyN from './LuckyN'
// import {sum} from './utils'
// import BoxGrid from './BoxGrid'
// import CounterEffect from './CounterEffect'
// import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every(d => d === dice[0]);
// }


function App() {

  return (
    <>
      {/* <CounterEffect /> */}
      <QuoteFetcherLoader />
    {/* <BoxGrid /> */}
    {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
    <LuckyN winCheck={allSameValue} numDice={3} title="Roll the same number"/> */}
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
