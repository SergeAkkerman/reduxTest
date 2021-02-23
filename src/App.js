import logo from './logo.svg';
import './App.css';
import ShowText from './ShowText';
import Show_text1 from './ShowText_1_button';
import Show_text2 from './ShowText_2_button';
import Show_text3 from './ShowText_3_button';

function App() {
  return (
    <div className="App">
      <Show_text1 />
      <Show_text2 />
      <Show_text3 />
      <ShowText />
    </div>
  );
}

export default App;
