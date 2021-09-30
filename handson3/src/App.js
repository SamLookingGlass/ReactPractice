import './App.css';
import NumberBox from './NumberBox';
import TickleBox from './TickleBox';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <NumberBox initialValue={10}/>
      <Counter startingNumber={0}/>
      <TickleBox text="I'm elmo!"/>
    </div>
  );
}

export default App;
